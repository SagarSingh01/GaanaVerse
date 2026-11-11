const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({
    version: 'v1',
    auth: oauth2Client
});

const sendEmail = async (to, subject, text, html) => {
    try {
        const body = html || text || '';

        const message = [
            `From: ${process.env.GOOGLE_USER}`,
            `To: ${to}`,
            `Subject: ${subject}`,
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            '',
            body
        ].join('\r\n');

        const raw = Buffer.from(message).toString('base64url');

        const response = await gmail.users.messages.send({
            userId: 'me',
            requestBody: { raw }
        });

        console.log('Email sent:', response.data.id);

        return response.data;

    } catch (error) {
        console.error('Email sending failed:', error.message);
        throw error;
    }
};

module.exports = { sendEmail };