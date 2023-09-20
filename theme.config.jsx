export default {
    logo: <>
        <img src="https://xenithai-docs.vercel.app/images/logo-dark.png" alt="logo" className="logo-light"/>
        <img src="https://xenithai-docs.vercel.app/images/logo.png" alt="logo" className="logo-dark"/>
    </>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – XenithAI'
        }
    },
    docsRepositoryBase: 'https://github.com/bishwajitcadhikary/xenithai-docs/tree/main/',
    head: (
        <>
            <link type="image/x-icon" rel="shortcut icon" href="https://xenithai-docs.vercel.app/images/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="XenithAI - AI Content Generator Tools (SaaS)" />
            <meta property="og:description" content="🚀 Experience the Future of AI Content Creation! ✨ XenithAI brings you cutting-edge AI tools like an advanced Content Builder, Image Builder, Chat Bots, Code Helper, Voice To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
            <meta property="og:image" content="https://xenithai-docs.vercel.app/images/preview.png" />
            <meta property="og:url" content="https://xenithai-docs.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="234635452287600" />

            <meta name="twitter:card" content="🚀 Experience the Future of AI Content Creation! ✨ XenithAI brings you cutting-edge AI tools like an advanced Content Builder, Image Builder, Chat Bots, Code Helper, Voice To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
            <meta name="twitter:title" content="XenithAI - AI Content Generator Tools (SaaS)" />
            <meta name="twitter:description" content="🚀 Experience the Future of AI Content Creation! ✨ XenithAI brings you cutting-edge AI tools like an advanced Content Writer, Image Generator, Chatbots, Code Generation, Speech To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
            <meta name="twitter:image" content="https://xenithai-docs.vercel.app/images/preview.png" />
        </>
    ),
    footer: {
        text: <span>
            Copyright © {new Date().getFullYear()} Riktheme. All Rights Reserved.
        </span>,
    },
    sidebar: {
        defaultMenuCollapseLevel: Infinity,
    },
}
