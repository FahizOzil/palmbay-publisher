import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import DiscountPopup from "./Components/DiscountPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Palm Bay Publishing",
  description: "Your Story, Our Passion - Self-Publishing with Palm Bay",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Palm Bay Publishing" />
        <meta
          name="keywords"
          content="book publishing, self-publishing, book marketing, book distribution, editing services, cover design, ISBN registration, Palm Bay Publishers"
        />
        <meta
          name="description"
          content="Your Story, Our Passion - Self-Publishing with Palm Bay"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono&family=Geist+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* canocical link  */}
        <link rel="canonical" href="https://palmbaypublishers.com/" />


       
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NR6SF35L');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR6SF35L"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Tawk.to Live Chat Script with Custom Configuration */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            
            // Custom callback functions
            Tawk_API.onLoad = function() {
              console.log('Tawk.to chat loaded successfully');
              
              // Ensure widget is visible
              Tawk_API.showWidget();
              
              // Set custom styling without hiding attributes
              Tawk_API.setAttributes({
                'bubble-background-color': '#1976d2',
                'bubble-text-color': '#ffffff'
              }, function(error) {
                if (error) console.log('Error setting Tawk attributes:', error);
              });
            };
            
            // Auto-open chat when receiving a message
            Tawk_API.onChatMessageVisitor = function(message) {
              // This fires when visitor sends a message
              console.log('Visitor message:', message);
            };
            
            Tawk_API.onChatMessageAgent = function(message) {
              // This fires when agent sends a message - auto-open chat
              console.log('Agent message received:', message);
              Tawk_API.maximize();
            };
            
            Tawk_API.onUnreadCountChanged = function(unreadCount) {
              // Auto-open when there are unread messages
              if (unreadCount > 0) {
                console.log('New unread messages:', unreadCount);
                Tawk_API.maximize();
              }
            };
            
            // Initialize Tawk.to
            (function(){
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/68aded95a8e039192a6ad8d1/1j3jmg46o';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>

        {/* Enhanced Tawk.to Customization */}
        <Script id="tawk-customization" strategy="afterInteractive">
          {`
            function customizeTawkWidget() {
              if (typeof Tawk_API !== 'undefined' && Tawk_API.onLoad) {
                Tawk_API.onLoad = function() {
                  console.log('Tawk widget customization loaded');
                  
                  // Remove annoying popups but keep widget visible
                  const style = document.createElement('style');
                  style.innerHTML = \`
                    /* Hide only popup notifications, keep widget visible */
                    .tawk-tooltip,
                    .tawk-notification {
                      display: none !important;
                    }
                    
                    /* Hide welcome message bubble but keep chat button */
                    .tawk-welcome-message {
                      display: none !important;
                    }
                    
                    /* Ensure chat widget is always visible */
                    iframe[src*="tawk.to"] {
                      display: block !important;
                      visibility: visible !important;
                      opacity: 1 !important;
                    }
                    
                    /* Customize chat bubble styling */
                    .tawk-chat-panel .tawk-chat-bubble {
                      background-color: #1976d2 !important;
                      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3) !important;
                    }
                  \`;
                  document.head.appendChild(style);
                  
                  // Create custom hover tooltip
                  setTimeout(() => {
                    const tawkWidget = document.querySelector('iframe[src*="tawk.to"]');
                    
                    if (tawkWidget && tawkWidget.parentElement) {
                      const widgetContainer = tawkWidget.parentElement;
                      
                      // Only add tooltip if it doesn't exist
                      if (!widgetContainer.querySelector('.custom-tawk-tooltip')) {
                        const tooltip = document.createElement('div');
                        tooltip.className = 'custom-tawk-tooltip';
                        tooltip.innerHTML = 'Need help? Chat with us!';
                        tooltip.style.cssText = \`
                          position: absolute;
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          color: white;
                          padding: 10px 16px;
                          border-radius: 20px;
                          font-size: 13px;
                          font-weight: 500;
                          white-space: nowrap;
                          z-index: 999999;
                          pointer-events: none;
                          opacity: 0;
                          transform: translateY(10px);
                          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                          bottom: 75px;
                          right: 10px;
                          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                          border: 1px solid rgba(255,255,255,0.2);
                        \`;
                        
                        // Add arrow
                        const arrow = document.createElement('div');
                        arrow.style.cssText = \`
                          position: absolute;
                          bottom: -6px;
                          right: 20px;
                          width: 0;
                          height: 0;
                          border-left: 6px solid transparent;
                          border-right: 6px solid transparent;
                          border-top: 6px solid #764ba2;
                        \`;
                        tooltip.appendChild(arrow);
                        
                        widgetContainer.style.position = 'relative';
                        widgetContainer.appendChild(tooltip);
                        
                        // Enhanced hover effects
                        widgetContainer.addEventListener('mouseenter', () => {
                          tooltip.style.opacity = '1';
                          tooltip.style.transform = 'translateY(0)';
                        });
                        
                        widgetContainer.addEventListener('mouseleave', () => {
                          tooltip.style.opacity = '0';
                          tooltip.style.transform = 'translateY(10px)';
                        });
                      }
                    }
                  }, 2000);
                };
              } else {
                setTimeout(customizeTawkWidget, 1000);
              }
            }
            
            // Initialize customization
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', customizeTawkWidget);
            } else {
              customizeTawkWidget();
            }
          `}
        </Script>



         <DiscountPopup />
      </body>
    </html>
  );
}