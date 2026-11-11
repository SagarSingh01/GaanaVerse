function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

function getOTPHtml(otp) {
    const appName = "Spotify Clone";
    const accent = "#1ed760";
    const expiryMinutes = 5;
    const year = new Date().getFullYear();

    const bars = [14, 24, 36, 24, 14]
        .map(height => `
            <td valign="bottom" style="padding:0 2px;">
                <div style="
                    width:6px;
                    height:${height}px;
                    background:${accent};
                    border-radius:4px;
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

    <title>${appName} - Email Verification</title>

    <style>
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background-color: #090909;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-text-size-adjust: 100%;
        }

        table {
            border-spacing: 0;
            border-collapse: collapse;
        }

        img {
            border: 0;
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
            line-height: 1.25;
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

            .email-container {
                width: 100% !important;
            }

            .email-content {
                padding: 32px 22px !important;
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
                padding: 26px 16px !important;
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
        Your ${appName} verification code is ${otp}.
        It expires in ${expiryMinutes} minutes.
    </div>

    <table role="presentation" width="100%" bgcolor="#090909">
        <tr>
            <td align="center" class="outer-padding"
                style="padding:50px 18px;">

                <table
                    role="presentation"
                    width="540"
                    class="email-container"
                    bgcolor="#151515"
                    style="
                        max-width:540px;
                        width:100%;
                        background-color:#151515;
                        border:1px solid #292929;
                        border-radius:18px;
                        overflow:hidden;
                    "
                >

                    <!-- Top accent -->
                    <tr>
                        <td height="4"
                            bgcolor="${accent}"
                            style="height:4px;line-height:4px;font-size:0;">
                            &nbsp;
                        </td>
                    </tr>

                    <!-- Main content -->
                    <tr>
                        <td class="email-content" align="center">

                            <!-- Equalizer logo -->
                            <table role="presentation" align="center">
                                <tr>${bars}</tr>
                            </table>

                            <!-- Brand -->
                            <p style="
                                margin:16px 0 0;
                                color:#ffffff;
                                font-size:14px;
                                font-weight:bold;
                                letter-spacing:3px;
                                text-transform:uppercase;
                            ">
                                ${appName}
                            </p>

                            <!-- Heading -->
                            <h1 class="heading" style="
                                margin:38px 0 12px;
                                color:#ffffff;
                                font-weight:700;
                            ">
                                Verify your email
                            </h1>

                            <p class="description" style="
                                margin:0;
                                color:#a7a7a7;
                                font-size:15px;
                                line-height:1.7;
                            ">
                                You're one step away from enjoying your
                                music. Enter the verification code below
                                to complete your registration.
                            </p>

                            <!-- OTP section -->
                            <table role="presentation"
                                width="100%"
                                bgcolor="#0d0d0d"
                                style="
                                    margin-top:32px;
                                    border:1px solid #303030;
                                    border-radius:14px;
                                "
                            >
                                <tr>
                                    <td align="center"
                                        style="padding:30px 12px;">

                                        <p style="
                                            margin:0 0 18px;
                                            color:#888888;
                                            font-size:11px;
                                            font-weight:bold;
                                            letter-spacing:3px;
                                            text-transform:uppercase;
                                        ">
                                            Your verification code
                                        </p>

                                        <div class="otp-code" style="
                                            color:${accent};
                                            font-weight:bold;
                                            line-height:1.3;
                                            white-space:nowrap;
                                        ">
                                            ${otp}
                                        </div>

                                        <p style="
                                            margin:20px 0 0;
                                            color:#a7a7a7;
                                            font-size:12px;
                                        ">
                                            Expires in
                                            <strong style="color:#ffffff;">
                                                ${expiryMinutes} minutes
                                            </strong>
                                        </p>

                                    </td>
                                </tr>
                            </table>

                            <!-- Security message -->
                            <table role="presentation"
                                width="100%"
                                bgcolor="#1d2a20"
                                style="
                                    margin-top:24px;
                                    border-left:3px solid ${accent};
                                    border-radius:7px;
                                "
                            >
                                <tr>
                                    <td style="
                                        padding:16px;
                                        color:#b7c5ba;
                                        font-size:13px;
                                        line-height:1.7;
                                    ">
                                        <strong style="color:#ffffff;">
                                            Keep your code safe.
                                        </strong>
                                        Never share this verification
                                        code with anyone.
                                    </td>
                                </tr>
                            </table>

                            <!-- Ignore message -->
                            <p style="
                                margin:30px 0 0;
                                color:#858585;
                                font-size:12px;
                                line-height:1.8;
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
                            bgcolor="#101010"
                            style="
                                padding:26px 24px;
                                border-top:1px solid #292929;
                            ">

                            <p style="
                                margin:0;
                                color:#777777;
                                font-size:11px;
                                line-height:1.8;
                            ">
                                This is an automated email.
                                Please do not reply.
                                <br><br>
                                &copy; ${year} ${appName}.
                                <br>
                                An independent learning project,
                                not affiliated with Spotify AB.
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