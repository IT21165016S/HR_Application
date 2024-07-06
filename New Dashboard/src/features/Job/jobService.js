import axios from "axios";
import { base_url } from "utils/base_url.js";
import { config } from "utils/axiosConfig.js";

const getJobs = async () => {
  const response = await axios.get(`${base_url}/job`, config);
  return response.data;
};

const getMyJobs = async () => {
  const response = await axios.get(`${base_url}/job/my-jobs`, config);
  return response.data;
};

const createJob = async (data) => {
  const response = await axios.post(`${base_url}/job/create-job`, data, config);
  return response.data;
};

const updateJob = async (data) => {
  const response = await axios.put(
    `${base_url}/job/update-job/${data.id}`,
    data,
    config
  );
  return response.data;
};

const deleteJob = async (id) => {
  const response = await axios.delete(
    `${base_url}/job/delete-job/${id}`,
    config
  );
  return response.data;
};

const jobService = {
  getJobs,
  getMyJobs,
  createJob,
  updateJob,
  deleteJob,
};

export default jobService;
