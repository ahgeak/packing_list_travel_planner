const User = require('./User');
const List = require('./List');

User.hasMany(List, {
    foriengKey: 'email',
    onDelete: 'CASCADE'
});

List.belongsTo(User, {
    foriengKey: 'email'
});

module.exports = { List, User };