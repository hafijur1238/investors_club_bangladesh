import { reactive } from 'vue';

const state = reactive({
    uuid: null, // Will hold the UUID value
});

export const useUuid = () => {
    return {
        uuid: state.uuid,
        setUuid: (newUuid) => {
            state.uuid = newUuid;
        },
        clearUuid: () => {
            state.uuid = null;
        },
    };
};
