import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kswlxiwvsbqdokuhqgwb.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzd2x4aXd2c2JxZG9rdWhxZ3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTU1OTMsImV4cCI6MjA1NzQ3MTU5M30.nqiX7ZeifpHIJ5n_OVS_aqEEKOPelhTdEnRxCC5U8X0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzd2x4aXd2c2JxZG9rdWhxZ3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTU1OTMsImV4cCI6MjA1NzQ3MTU5M30.nqiX7ZeifpHIJ5n_OVS_aqEEKOPelhTdEnRxCC5U8X0"
    }
})