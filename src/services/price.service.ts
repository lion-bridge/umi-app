import request from '@/utils/request';

export const getName = async (params: any): Promise<string> => {
    return request('/api/price/list', { method: 'GET' })
};