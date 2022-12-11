import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => { 
    try {
        const { data } = await Api().get('/tarefas');
        return data;

    } catch (error: any) {
        return new ApiException(error.message || 'Error ao buscar os registros')
    }
    
}

const getById = async (id: number): Promise<ITarefa | ApiException> => { 
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;

    } catch (error: any) {
        return new ApiException(error.message || 'Error ao consultar registro')
    }
    
}

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => { 
    try {
        const { data } = await Api().post('/tarefas', dataToCreate);
        return data;

    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar registro')
    }
    
}

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => { 
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;

    } catch (error: any) {
        return new ApiException(error.message || 'Error ao atualizar o registro')
    }
    
}

const deleteById = async (id: number): Promise<undefined | ApiException> => { 
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;

    } catch (error: any) {
        return new ApiException(error.message || 'Error ao deletar o registro')
    }
    
}

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}