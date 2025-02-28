import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "../../styles/tailwind.css";
import State from "../components/State";
import ExcelPage from "./Excel";
import { ContactsPage } from "./ContactsPage";
import { BookingsPage } from "./BookingsPage";

export function App() {
  const [refresh, setRefresh] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [diplomas, setDiplomas] = useState([]);
  const [activeTab, setActiveTab] = useState("bookings"); // حالة للتحكم في التبديل بين الصفحات

  const token = sessionStorage.getItem("jwtToken");
  if (!token) {
    console.error("No token found in sessionStorage");
    return;
  }

  useEffect(() => {
    const metaViewport = document.querySelector("meta[name=viewport]");
    
    if (metaViewport) {
      metaViewport.setAttribute("content", "width=device-width, initial-scale=0.1");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "viewport";
      newMeta.content = "width=device-width, initial-scale=0.1";
      document.head.appendChild(newMeta);
    }
    
    axios
      .get(
        "/content-manager/collection-types/api::contact.contact",
        {
          headers: {
            Authorization: `Bearer ${token.replace(/"/g, "")}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.results.filter((item: any) => item.read != true);        
        setContacts(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get(
        "/content-manager/collection-types/api::booking.booking",
        {
          headers: {
            Authorization: `Bearer ${token.replace(/"/g, "")}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.results.filter((item: any) => item.read != true);        
        setBookings(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get(
        "/content-manager/collection-types/api::diploma.diploma",
        {
          headers: {
            Authorization: `Bearer ${token.replace(/"/g, "")}`,
          },
        }
      )
      .then((res) => {
        setDiplomas(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, [refresh]);



  return (
    <div className="p-8 bg-gray-100 min-h-screen app space-y-4">
      <Toaster position="top-center" reverseOrder={false} />

      {/* أزرار التنقل بين الصفحات */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            activeTab === "bookings" ? "bg-blue-600" : "bg-gray-400"
          }`}
          onClick={() => setActiveTab("bookings")}
        >
          Bookings Page
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            activeTab === "contacts" ? "bg-blue-600" : "bg-gray-400"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts Page
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
      <State className="bg-green-500" title="Contacts" numbers={contacts?.length} description="kmk km km" />
      <State className="bg-red-500" title="Diplomas" numbers={diplomas?.length} description="kmk km km" />
      <State className="bg-blue-500" title="Booking" numbers={bookings?.length} description="kmk km km" />
    </div>

      {activeTab === "contacts" ? (
        <ContactsPage setRefresh={setRefresh} refresh={refresh}/>
      ) : (
        <BookingsPage setRefresh={setRefresh} refresh={refresh}/>
      )}
    </div>
  );
}
