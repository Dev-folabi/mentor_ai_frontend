import apiClient from './index';
import { ApiResponse } from '@/types/api';
import { Module, CareerPath } from '@/types/learning';
import { careerPath } from '@/constant/learning';

// Get all learning paths
export const getLearningPaths = async (): Promise<ApiResponse<CareerPath[]>> => {
  const response = await apiClient.get<ApiResponse<CareerPath[]>>('/learning-paths');
  return response.data;
};

// Get a specific learning path by ID
export const getLearningPathById = async (id: string): Promise<ApiResponse<CareerPath>> => {
  const response = await apiClient.get<ApiResponse<CareerPath>>(`/learning-paths/${id}`);
  return response.data;
};

// Get modules for a specific learning path
export const getModulesByPathId = async (pathId: string): Promise<ApiResponse<Module[]>> => {
  const response = await apiClient.get<ApiResponse<Module[]>>(`/learning-paths/${pathId}/modules`);
  return response.data;
};

// Get a specific module by ID
export const getModuleById = async (moduleId: string): Promise<ApiResponse<Module>> => {
  const response = await apiClient.get<ApiResponse<Module>>(`/modules/${moduleId}`);
  return response.data;
};

// Update module progress
export const updateModuleProgress = async (
  moduleId: string, 
  data: { status: string; progress: number }
): Promise<ApiResponse<Module>> => {
  const response = await apiClient.patch<ApiResponse<Module>>(
    `/modules/${moduleId}/progress`, 
    data
  );
  return response.data;
};

// Get module content
export const getModuleContent = async (moduleId: string): Promise<ApiResponse<Module>> => {
  const response = careerPath.modules.find((module) => module.id === moduleId);
  return {
    status: response ? 200 : 404,
    data: response as Module,
    message: response ? 'Module content retrieved successfully' : 'Module not found'
  };
};