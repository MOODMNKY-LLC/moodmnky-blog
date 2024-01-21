import '@/styles/animate.css' // See: https://animate.style/
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import '@/styles/utility-patterns.css'
import { BubbleChat } from 'flowise-embed-react'; // Import BubbleChat

// Core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '@/styles/notion.css' // Override some styles
import 'aos/dist/aos.css' // You can also use <link> for styles

import { GlobalContextProvider } from '@/lib/global'
import { isBrowser, loadExternalResource } from '@/lib/utils'
import ExternalPlugins from '@/components/ExternalPlugins'
import { CUSTOM_EXTERNAL_CSS, CUSTOM_EXTERNAL_JS, IMG_SHADOW } from '@/blog.config'

const MyApp = ({ Component, pageProps }) => {
  // Custom style CSS and JS imports
  if (isBrowser) {
    // Initialize AOS animation
    // Static import of local custom styles
    loadExternalResource('/css/custom.css', 'css')
    loadExternalResource('/js/custom.js', 'js')

    // Automatically add image shadow
    if (IMG_SHADOW) {
      loadExternalResource('/css/img-shadow.css', 'css')
    }

    // Import external custom scripts
    if (CUSTOM_EXTERNAL_JS && CUSTOM_EXTERNAL_JS.length > 0) {
      for (const url of CUSTOM_EXTERNAL_JS) {
        loadExternalResource(url, 'js')
      }
    }

    // Import external custom styles
    if (CUSTOM_EXTERNAL_CSS && CUSTOM_EXTERNAL_CSS.length > 0) {
      for (const url of CUSTOM_EXTERNAL_CSS) {
        loadExternalResource(url, 'css')
      }
    }
  }

  return (
    <>
      <BubbleChat
        chatflowid="1b437ba1-ff43-4188-a1dc-474878160dae"
        apiHost="https://flowise-workstation.moodmnky.com"
        theme={{
          button: {
            backgroundColor: '#172447',
            right: 20,
            bottom: 20,
            size: 'medium',
            iconColor: 'white',
            customIconSrc: 'https://cdn.shopify.com/s/files/1/0693/4328/1426/files/moodmnky-flowise-react-icon-sctc.svg',
          },
          chatWindow: {
            welcomeMessage: 'Welcome back SCTC Crew! How may I be of service?',
            backgroundColor: '#2F3437',
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: '#2F3437',
            botMessage: {
              backgroundColor: '#2F3437',
              textColor: '#FFFFFF',
              showAvatar: true,
              avatarSrc: 'https://cdn.discordapp.com/attachments/1083532452347269220/1198302011888767156/5bda0b7be46cb971021b7630_sctc-logos-03_1_1.png',
            },
            userMessage: {
              backgroundColor: '#172447',
              textColor: '#ffffff',
              showAvatar: false,
              avatarSrc: 'https://cdn.discordapp.com/attachments/1083532452347269220/1198302011888767156/5bda0b7be46cb971021b7630_sctc-logos-03_1_1.png',
            },
            textInput: {
              placeholder: 'Type your question',
              backgroundColor: '#2F3437',
              textColor: '#ffffff',
              sendButtonColor: '#172447',
            },
          },
        }}
      />
      <GlobalContextProvider {...pageProps}>
        <Component {...pageProps} />
        <ExternalPlugins {...pageProps} />
      </GlobalContextProvider>
    </>
  );
};

export default MyApp;
