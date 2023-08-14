import React from 'react';

const getContent = (content) => {
  if (Array.isArray(content)) {
    return (<ul className="ease-in duration-300">{content.map((text, index) => {
      return (<li key={index}>
        <div className="flex flex-row">
        <svg width="20" height="20" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="color"> <path fill="#b1cc33" d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"></path> </g> <g id="line"> <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"></path> </g> </g></svg>
          <div className="ml-2 text-lg">{text}</div>
        </div></li>)
    })}</ul>)
  }
  return (<p className="ease-in duration-300 text-lg">{content}</p>)
}

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = [
    {
      title: "Loads",
      "content": ["User-roles based loads management.","Dispatchers can create loads, keep track of ongoing loads etc.", "Admin can monitor load bookings on a tracking board.", "Loads can be filtered based on various parameters.", "Easy to use filters user interface."]
    },
    {
      title: "Stats",
      "content": ["There is a performance dashboard displaying real-time load status.", "The dashboard includes revenue stats.", "Loads gross revenue stats.", "Loads profit stats.", "Total loads gross by dispatchers stats", "Much more stats..."]
    },
    {
      title: "Carriers",
      "content": ["Maintain a comprehensive database of trucking companies.", "Manage carrier profiles.", "Manage carrier documents.", "Manage carrier authority.", "Manage w9Form, insurance etc.."]
    },
    {
      title: "Brokers",
      "content": ["Add and maintain brokerage companies database.", "Retrieve a broker contact information easily whenever required."]
    },
    {
      title: "Invoices",
      "content": ["One click invoicing system integrated with payment processors like Stripe.", "Automatic synchronization of in app invoices with Stripe invoices.", "Filter invoices based on various parameters.", "Realtime notifications once the invoice is paid."]
    },
    {
      title: "AI Insights",
      "content": ["Get valuable AI insights on how to maximize profit.", "AI feature is currently in beta.", "More coming soon..."]
    },
  ]

  return (
    <div className="flex flex-col" style={{ minHeight: "300px" }}>
      <div className="flex tabs flex-row mb-4">
        {tabs.map((tab, index) => {
          const activeClasses = index === activeTab ? "bg-indigo-600 text-white" : ""
          return (
            <div key={tab.title} onClick={() => setActiveTab(index)} className={`ease-in duration-300 p-3 text-center w-32 border rounded border-sky-500 cursor-pointer ${activeClasses}`}>{tab.title}</div>
          )
        })}
      </div>
      <div className="active-tab-content">
        <div className="flex flex-wrap -m-6">
          <div className="w-auto p-6">
            <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-config-id="auto-txt-2-2">{activeTab + 1}</span>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div>
              <h3 className="mb-3 text-2xl font-semibold leading-snug" data-config-id="auto-txt-3-2">{tabs[activeTab].title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed" data-config-id="auto-txt-4-2">{getContent(tabs[activeTab].content)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};