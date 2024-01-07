const User = require('./User');
const List = require('./List');

User.hasMany(List, {
    foriengKey: 'user_id',
    onDelete: 'CASCADE'
});

List.belongsTo(User, {
    foriengKey: 'user_id'
});

module.exports = { List, User };
