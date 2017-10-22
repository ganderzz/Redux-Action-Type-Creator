const generateUniqueId = (function(i) {
    return () => i++;
})(0);

module.exports = function createActionType(...type) {
    const actions = (type || []).reduce((accu, item) => {
        accu[item] = `${item}/${generateUniqueId()}`;
    }, {});

    return Object.freeze(actions);
};