import api from "./api";

export async function fetchStudents() {
  const { data } = await api.get("/students");
  return data;
}

export async function fetchStudentById(id) {
  const { data } = await api.get(`/students/${id}`);
  return data;
}

