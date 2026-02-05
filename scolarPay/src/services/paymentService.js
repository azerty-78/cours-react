import api from "./api";

export async function fetchPayments() {
  const { data } = await api.get("/payments");
  return data;
}

export async function createPayment(payload) {
  const { data } = await api.post("/payments", payload);
  return data;
}

export async function fetchParentPayments() {
  const { data } = await api.get("/parent/payments");
  return data;
}

