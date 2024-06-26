

function parseQuery(query) {
    const selectRegex = /SELECT (.+) FROM (.+)/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table] = match;
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim()
        };
    } else {
        throw new Error('Invalid query format');
    }
}

function parseQueryWhere(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereClause] = match;
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim(),
            whereClause: whereClause ? whereClause.trim() : null
        };
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = {parseQuery, parseQueryWhere};
