# AutoSSO [Alpha]
Automatically enters SSO credentials when bookmark is clicked

## Supported SSO:
* Sophos XG Client-based Single Sign On
* Microsoft Azure SSO

## Instructions:
1. Open the autoSSO.min.js in github.
2. Copy all of the text
3. Create a new bookmark
4. Set name to whatever you'd like (e.g AutoSSO)
5. Paste the contents of the main.js file into the url input
6. Hit save

You should be all good to use the script now. Once the SSO appears, just hit the bookmark, it will begin the initial setup of the script. Which means that it will prompt you for your credentials which will be encoded and saved in your browser.

Now whenever you click the bookmark, AutoSSO will automatically input your credentials and submit them.

## Purpose:
The primary purpose is to speed up the annoying process of needing to re-enter your credentials into the SSO when authentication expires. Instead of needing to enter your username and password, this script does it for you.

## Security Disclaimer:
This script obfuscates your username and password by encoding. This means that encryption is not used to protect your credentials. It is generally not an issue as the enterprise security within the institution is more than enough to protect your computer. If you are not comfortable with the level of security, then simply don't use the script. I do not take any responsibility for any losses that this script may incur due to incorrect use or otherwise.

## What is SSO?
SSO otherwise known as Single Sign On is used to prevent you from needing to sign into multiple services. You can think of it as a central sign on. After you use the SSO, you should be authenticated and able to access GSuite without needing a password if SSO is configured correctly by system administrators.
