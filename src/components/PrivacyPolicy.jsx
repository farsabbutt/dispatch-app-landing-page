import React, { useState } from 'react';
export const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {!isOpen && <span style={{ cursor: "pointer" }} onClick={(event) => { event.preventDefault(); setIsOpen(true); }}>Privacy Policy</span>}
      {isOpen && (
        <>
        {/* <!--
        Background backdrop, show/hide based on modal state.
    
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/*
            Modal panel, show/hide based on modal state.
    
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
           */}
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:mx-8">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                      <radialGradient id="eq3~GJy~0Fdv_1y_77RFNa_119004_gr1" cx="29.876" cy="43.5" r="34.086" gradientTransform="matrix(1 0 0 -1 0 69)" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#efdcb1"></stop><stop offset="0" stop-color="#f2e0bb"></stop><stop offset=".011" stop-color="#f2e0bc"></stop><stop offset=".362" stop-color="#f9edd2"></stop><stop offset=".699" stop-color="#fef4df"></stop><stop offset="1" stop-color="#fff7e4"></stop></radialGradient><path fill="url(#eq3~GJy~0Fdv_1y_77RFNa_119004_gr1)" d="M60,42h-4.893c-0.996,0-1.92,0.681-2.08,1.664C52.824,44.917,53.785,46,55,46h0.83 c1.624,0,3.081,1.216,3.166,2.839C59.086,50.569,57.71,52,56,52H41h-8h-7v-1l-9.852,0c-1.474,0-2.839-0.995-3.098-2.445 c-0.341-1.906,1.119-3.563,2.963-3.555c0.736,0.003,1.452-0.23,1.987-0.687V41L5.698,41c-1.88,0-3.572-1.395-3.691-3.272 c-0.126-1.984,1.405-3.628,3.341-3.712c0.867-0.008,2.545-0.012,4.147-0.014C11.432,33.999,13,32.429,13,30.492v-0.006 c0-1.94-1.571-3.512-3.511-3.51C6.772,26.979,6.5,27,6.5,27c-1.466,0-2.637-1.261-2.487-2.758C4.143,22.941,5.335,22,6.643,22h0.715 c1.308,0,2.499-0.941,2.63-2.242C10.137,18.261,8.966,17,7.5,17H3.17c-1.624,0-3.081-1.216-3.166-2.839C-0.086,12.431,1.29,11,3,11 l4.893,0c0.996,0,1.92-0.681,2.08-1.664C10.176,8.083,9.215,7,8,7L7.17,7C5.545,7,4.089,5.784,4.004,4.161C3.914,2.431,5.29,1,7,1 l35.852,0c1.474,0,2.839,0.995,3.098,2.445C46.291,5.351,44.831,7.008,42.987,7c-0.883-0.004-1.728,0.34-2.271,1H41v4l7.302,0 c1.895,0,3.594,1.419,3.693,3.312C52.101,17.33,50.495,19,48.5,19h-0.208c-0.639,1.125-1.651,2-2.792,2h-4.411 c-0.034,0.034-0.054,0.054-0.089,0.089v3.92c0.84,0.057,1.62,0.42,2.176,0.991l12.181,0c1.308,0,2.499,0.941,2.63,2.242 C58.137,29.739,56.966,31,55.5,31l-0.857,0c-1.308,0-2.499,0.941-2.63,2.242C51.863,34.739,53.034,36,54.5,36h5.33 c1.624,0,3.081,1.216,3.166,2.839C63.086,40.569,61.71,42,60,42z"></path><linearGradient id="eq3~GJy~0Fdv_1y_77RFNb_119004_gr2" x1="34" x2="34" y1="11" y2="59.509" gradientTransform="matrix(1 0 0 -1 0 69)" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#4bcaee"></stop><stop offset="1" stop-color="#65cff3"></stop></linearGradient><path fill="url(#eq3~GJy~0Fdv_1y_77RFNb_119004_gr2)" d="M56,9H22c-5.523,0-10,4.477-10,10v39h32c3.314,0,6-2.686,6-6V15C50,11.686,52.686,9,56,9 L56,9z"></path><linearGradient id="eq3~GJy~0Fdv_1y_77RFNc_119004_gr3" x1="56" x2="56" y1="47.494" y2="59.087" gradientTransform="matrix(1 0 0 -1 0 69)" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#41d4f1"></stop><stop offset=".25" stop-color="#3ccdee"></stop><stop offset=".601" stop-color="#2ebbe7"></stop><stop offset="1" stop-color="#189edb"></stop></linearGradient><path fill="url(#eq3~GJy~0Fdv_1y_77RFNc_119004_gr3)" d="M56,9L56,9c-3.314,0-6,2.686-6,6v7h9c1.657,0,3-1.343,3-3v-4C62,11.686,59.313,9,56,9z"></path><linearGradient id="eq3~GJy~0Fdv_1y_77RFNd_119004_gr4" x1="57" x2="57" y1="9.094" y2="22.033" gradientTransform="matrix(-1 0 0 1 82 35)" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#30c4ea"></stop><stop offset=".412" stop-color="#28b9e5"></stop><stop offset="1" stop-color="#18a1db"></stop></linearGradient><path fill="url(#eq3~GJy~0Fdv_1y_77RFNd_119004_gr4)" d="M44,58L44,58H12c-3.314,0-6-2.686-6-6v-5c0-1.657,1.343-3,3-3h26c1.657,0,3,1.343,3,3v5 C38,55.314,40.686,58,44,58z"></path><linearGradient id="eq3~GJy~0Fdv_1y_77RFNe_119004_gr5" x1="34.406" x2="34.406" y1="44.597" y2="57.267" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#28b4e3"></stop><stop offset=".497" stop-color="#22ade0"></stop><stop offset="1" stop-color="#18a1db"></stop></linearGradient><path fill="url(#eq3~GJy~0Fdv_1y_77RFNe_119004_gr5)" d="M38,52v-5c0-1.657-1.343-3-3-3h-2.98c-1.215,0-2.176,1.083-1.973,2.336 C30.207,47.319,31.13,48,32.127,48h1.393c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-5.413c-0.996,0-1.92,0.681-2.08,1.664 C25.824,53.917,26.785,55,28,55h2.52c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5H42c0.407,0,0.666-0.042,0.812-0.119 C40.067,57.33,38,54.907,38,52z"></path><g><path fill="#fff" d="M33 27H20c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C35 26.105 34.105 27 33 27zM42 27h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C44 26.105 43.105 27 42 27zM22 41h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C24 40.105 23.105 41 22 41zM42 41H29c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C44 40.105 43.105 41 42 41zM26 34h-6c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v0C28 33.105 27.105 34 26 34zM42 34h-9c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h9c1.105 0 2 .895 2 2v0C44 33.105 43.105 34 42 34z"></path></g>
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h2 class="text-lg font-semibold leading-6 text-gray-900" id="modal-title">Privacy Policy</h2>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Last updated: 08/29/2023</p>
  
                      <h5 class="font-bold my-2">1. Introduction</h5>
  
                      <p class="text-sm text-gray-500">Welcome to Zomio, a truck dispatching solution registered in Wyoming, USA. At Zomio, we prioritize the privacy of our users. This privacy policy aims to provide clarity about the information we collect, how we use it, and your rights concerning it.</p>
  
                      <h5 class="font-bold my-2">2. Information We Collect</h5>
  
                      <p class="text-sm text-gray-500">We collect various types of information:<br />
  
                        Personal identification information: Name, email address, phone number.
                        Usage data: Information about how you use our service.
                        Third party analytics data (Google analytics).
                      </p>
                      <h5 class="font-bold my-2">3. How We Use Your Information</h5>
  
                      <p class="text-sm text-gray-500">We use the information we collect to: <br />
  
                        Provide and maintain our service.
                        Notify you about changes to our service.
                        Offer customer care and support.
                        Monitor the usage of our service.
                        Detect and prevent technical issues.
                      </p>
  
                      <h5 class="font-bold my-2">4. Data Protection Rights</h5>
  
                      <p class="text-sm text-gray-500">If you are a resident of the European Economic Area (EEA), you have data protection rights. Zomio aims to take reasonable steps to allow you to correct, amend, or delete your information.</p>
  
                      <h5 class="font-bold my-2">5. Cookies</h5>
  
                      <p class="text-sm text-gray-500">We use cookies to collect information and improve our services. For more information about cookies and how we use them, refer to our Cookie Policy.</p>
  
                      <h5 class="font-bold my-2">6. Third-Party Services</h5>
  
                      <p class="text-sm text-gray-500">Zomio may employ third-party services to facilitate our service, provide service on our behalf, or assist us in analyzing our service's usage. These third parties have access to your personal data only to perform these tasks and are obligated not to disclose or use it for any other purpose.</p>
  
                      <h5 class="font-bold my-2">7. Changes to This Privacy Policy</h5>
  
                      <p class="text-sm text-gray-500">We may update our privacy policy periodically. We will notify you of any changes by posting the new privacy policy on this page. It's advised to review this privacy policy periodically for any changes.</p>
  
                      <h5 class="font-bold my-2">8. Contact Us</h5>
  
                      <p class="text-sm text-gray-500">If you have any questions or suggestions about our privacy policy, please contact us at:<br /></p>
  
                      <p class="text-sm font-bold text-gray-500">Email: mursil@zomio.com</p>
  
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {/* <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button> */}
                <button onClick={(event) => { event.preventDefault(); setIsOpen(false); }} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  )
}