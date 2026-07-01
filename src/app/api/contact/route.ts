import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = text(body.name, 100);
    const company = text(body.company, 120);
    const email = text(body.email, 254);
    const message = text(body.message, 3000);
    const website = text(body.website, 200);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Revisá los datos ingresados e intentá nuevamente." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Faltan variables de entorno para el formulario de contacto.");
      return NextResponse.json(
        { error: "El servicio de correo no está configurado." },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nueva consulta web de ${name}`,
        text: [
          `Nombre: ${name}`,
          `Empresa / negocio: ${company || "No informado"}`,
          `Email: ${email}`,
          "",
          "Mensaje:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend rechazó el envío:", response.status, await response.text());
      return NextResponse.json(
        { error: "No pudimos enviar el mensaje. Intentá nuevamente." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error procesando el formulario de contacto:", error);
    return NextResponse.json(
      { error: "No pudimos procesar el mensaje." },
      { status: 500 },
    );
  }
}
