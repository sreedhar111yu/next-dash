// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

const User = {
    id: '',
    name: '',
    email: '',
    password: '',
  };
  
  const Customer = {
    id: '',
    name: '',
    email: '',
    image_url: '',
  };
  
  const Invoice = {
    id: '',
    customer_id: '',
    amount: 0,
    date: '',
    // In JavaScript, this is represented as an enum-like object.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' || 'paid',
  };
  
  const Revenue = {
    month: '',
    revenue: 0,
  };
  
  const LatestInvoice = {
    id: '',
    name: '',
    image_url: '',
    email: '',
    amount: '',
  };
  
  // The database returns a number for amount, but we later format it to a string with the formatCurrency function
  const LatestInvoiceRaw = {
    ...LatestInvoice,
    amount: 0,
  };
  
  const InvoicesTable = {
    id: '',
    customer_id: '',
    name: '',
    email: '',
    image_url: '',
    date: '',
    amount: 0,
    status: 'pending' || 'paid',
  };
  
  const CustomersTableType = {
    id: '',
    name: '',
    email: '',
    image_url: '',
    total_invoices: 0,
    total_pending: 0,
    total_paid: 0,
  };
  
  const FormattedCustomersTable = {
    id: '',
    name: '',
    email: '',
    image_url: '',
    total_invoices: 0,
    total_pending: '',
    total_paid: '',
  };
  
  const CustomerField = {
    id: '',
    name: '',
  };
  
  const InvoiceForm = {
    id: '',
    customer_id: '',
    amount: 0,
    status: 'pending' || 'paid',
  };
  