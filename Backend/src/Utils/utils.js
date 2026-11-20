function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

function getOTPHtml(otp, logoUrl) {
    const appName = "GaanaVerse";
    const tagline = "Your Universe. Your Music.";
    const expiryMinutes = 5;
    const year = new Date().getFullYear();

    const colors = {
        background: "#090B18",
        card: "#141629",
        panel: "#0D1020",
        border: "#292B43",
        gold: "#D8BC82",
        lavender: "#B9A7F5",
        text: "#F5F2FF",
        muted: "#A5A3B8",
    };

    const bars = [14, 24, 36, 24, 14]
        .map((height, index) => `
            <td valign="bottom" style="padding:0 3px;">
                <div style="
                    width:6px;
                    height:${height}px;
                    background:${index === 2 ? colors.gold : colors.lavender};
                    border-radius:5px;
                    font-size:0;
                    line-height:${height}px;
                ">&nbsp;</div>
            </td>
        `).join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">

    <title>${appName} | Email Verification</title>

    <style>
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background-color: ${colors.background};
            font-family: Arial, Helvetica, sans-serif;
            -webkit-text-size-adjust: 100%;
        }

        table {
            border-spacing: 0;
            border-collapse: collapse;
        }

        img {
            border: 0;
            outline: none;
            text-decoration: none;
        }

        .email-container {
            width: 100%;
            max-width: 540px;
        }

        .email-content {
            padding: 42px 40px;
        }

        .heading {
            font-size: 30px;
            line-height: 1.3;
        }

        .otp-code {
            font-family: 'Courier New', monospace;
            font-size: 44px;
            letter-spacing: 12px;
            padding-left: 12px;
        }

        @media only screen and (max-width: 600px) {
            .outer-padding {
                padding: 20px 12px !important;
            }

            .email-content {
                padding: 34px 22px !important;
            }

            .heading {
                font-size: 25px !important;
            }

            .description {
                font-size: 14px !important;
            }

            .otp-code {
                font-size: 34px !important;
                letter-spacing: 8px !important;
                padding-left: 8px !important;
            }

            .footer {
                padding: 22px 18px !important;
            }
        }

        @media only screen and (max-width: 360px) {
            .email-content {
                padding: 28px 16px !important;
            }

            .otp-code {
                font-size: 29px !important;
                letter-spacing: 6px !important;
                padding-left: 6px !important;
            }
        }
    </style>
</head>

<body>

    <!-- Preheader -->
    <div style="
        display:none;
        max-height:0;
        overflow:hidden;
        opacity:0;
        color:transparent;
    ">
        Your GaanaVerse verification code is ${otp}.
        It expires in ${expiryMinutes} minutes.
    </div>

    <table role="presentation" width="100%" bgcolor="${colors.background}">
        <tr>
            <td align="center" class="outer-padding"
                style="padding:50px 18px;">

                <table
                    role="presentation"
                    width="540"
                    class="email-container"
                    bgcolor="${colors.card}"
                    style="
                        max-width:540px;
                        width:100%;
                        background-color:${colors.card};
                        border:1px solid ${colors.border};
                        border-radius:20px;
                        overflow:hidden;
                    "
                >

                    <!-- Premium top accent -->
                    <tr>
                        <td height="3"
                            style="
                                height:3px;
                                line-height:3px;
                                font-size:0;
                                background-color:${colors.gold};
                            ">
                            &nbsp;
                        </td>
                    </tr>

                    <!-- Main content -->
                    <tr>
                        <td class="email-content" align="center">

                            <!-- Actual GaanaVerse logo -->
                            <table role="presentation" align="center">
                                <tr>
                                    <td align="center">
                                        <img
                                            src="cid:gaanaverse-logo"
                                            alt="GaanaVerse"
                                            width="76"
                                            height="76"
                                            style="display:block; width:76px; height:76px; object-fit:contain;"
                                        >
                                    </td>
                                </tr>
                            </table>

                            <!-- Brand name -->
                            <p style="
                                margin:18px 0 0;
                                color:${colors.text};
                                font-size:19px;
                                font-weight:bold;
                                letter-spacing:4px;
                                text-transform:uppercase;
                            ">
                                ${appName}
                            </p>

                            <p style="
                                margin:9px 0 0;
                                color:${colors.gold};
                                font-size:11px;
                                letter-spacing:2px;
                            ">
                                ${tagline}
                            </p>

                            <!-- Divider -->
                            <table role="presentation" width="55"
                                style="margin:30px auto 0;">
                                <tr>
                                    <td height="1"
                                        style="
                                            height:1px;
                                            background-color:${colors.gold};
                                            font-size:0;
                                            line-height:1px;
                                        ">
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>

                            <!-- Heading -->
                            <h1 class="heading" style="
                                margin:34px 0 14px;
                                color:${colors.text};
                                font-weight:700;
                            ">
                                A world of music awaits.
                            </h1>

                            <p class="description" style="
                                margin:0;
                                color:${colors.muted};
                                font-size:15px;
                                line-height:1.8;
                            ">
                                You're just one step away from joining
                                GaanaVerse. Verify your email address
                                using the secure code below to complete
                                your registration.
                            </p>

                            <!-- OTP panel -->
                            <table
                                role="presentation"
                                width="100%"
                                bgcolor="${colors.panel}"
                                style="
                                    margin-top:34px;
                                    border:1px solid ${colors.border};
                                    border-radius:16px;
                                "
                            >
                                <tr>
                                    <td align="center"
                                        style="padding:32px 12px;">

                                        <p style="
                                            margin:0 0 20px;
                                            color:${colors.muted};
                                            font-size:11px;
                                            font-weight:bold;
                                            letter-spacing:3px;
                                            text-transform:uppercase;
                                        ">
                                            Your verification code
                                        </p>

                                        <div class="otp-code" style="
                                            color:${colors.gold};
                                            font-weight:bold;
                                            line-height:1.3;
                                            white-space:nowrap;
                                        ">
                                            ${otp}
                                        </div>

                                        <p style="
                                            margin:22px 0 0;
                                            color:${colors.muted};
                                            font-size:12px;
                                        ">
                                            Valid for
                                            <strong style="color:${colors.text};">
                                                ${expiryMinutes} minutes
                                            </strong>
                                        </p>

                                    </td>
                                </tr>
                            </table>

                            <!-- Security notice -->
                            <table
                                role="presentation"
                                width="100%"
                                bgcolor="#1B1930"
                                style="
                                    margin-top:24px;
                                    border-left:3px solid ${colors.lavender};
                                    border-radius:8px;
                                "
                            >
                                <tr>
                                    <td style="
                                        padding:17px;
                                        color:#C3BEDA;
                                        font-size:13px;
                                        line-height:1.8;
                                    ">
                                        <strong style="color:${colors.text};">
                                            Your security matters.
                                        </strong>
                                        <br>
                                        Never share this code with anyone.
                                        GaanaVerse will never ask you to
                                        disclose your OTP.
                                    </td>
                                </tr>
                            </table>

                            <!-- Ignore message -->
                            <p style="
                                margin:30px 0 0;
                                color:${colors.muted};
                                font-size:12px;
                                line-height:1.9;
                            ">
                                Didn't request this verification?
                                <br>
                                You can safely ignore this email.
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="footer"
                            align="center"
                            bgcolor="#0D1020"
                            style="
                                padding:28px 24px;
                                border-top:1px solid ${colors.border};
                            ">

                            <p style="
                                margin:0 0 10px;
                                color:${colors.gold};
                                font-size:12px;
                                font-weight:bold;
                                letter-spacing:2px;
                            ">
                                ${appName}
                            </p>

                            <p style="
                                margin:0;
                                color:#85849A;
                                font-size:11px;
                                line-height:1.9;
                            ">
                                ${tagline}
                                <br>
                                This is an automated email.
                                Please do not reply.
                                <br><br>
                                &copy; ${year} ${appName}.
                                All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>`;
}


module.exports = { generateOTP, getOTPHtml }