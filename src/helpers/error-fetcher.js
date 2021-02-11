export default {
    firstError: (response) => {
        let errors = response.data.errors;
        let firstKey = Object.keys(errors)[0];

        return errors[firstKey][0];
    }
}