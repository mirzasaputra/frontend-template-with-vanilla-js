export const mapActions = (act) => {
    var actions = {};

    $.each(act, (key, val) => {
        actions = {
            ...actions,
            ...val.actions
        }
    })

    return actions;
}