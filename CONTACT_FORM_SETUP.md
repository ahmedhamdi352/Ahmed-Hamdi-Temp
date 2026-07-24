# Contact form setup

The portfolio contact form sends email from the server through the Resend Email API.

Configure these environment variables locally and in Vercel:

```text
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
CONTACT_TO_EMAIL=ahmedhamdi352@gmail.com
```

`RESEND_API_KEY` must remain server-only. Never prefix it with `NEXT_PUBLIC_`.

The default `onboarding@resend.dev` sender is intended for onboarding and can only send to the email address associated with the Resend account. For production delivery, verify a sending domain in Resend and update `CONTACT_FROM_EMAIL`, for example:

```text
CONTACT_FROM_EMAIL=Ahmed Hamdi Portfolio <contact@your-verified-domain.com>
```

In Vercel, add the variables under **Project Settings → Environment Variables**, then redeploy the project.
