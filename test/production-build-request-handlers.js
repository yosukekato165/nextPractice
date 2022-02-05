const { rest } = require("msw");

// These are the request handlers that will be applied during production builds.
// This is the place to mock fetch requests inside of getStaticProps.
module.exports = [
    rest.get(`https://jsonkeeper.com/b/AFRW`, (req, res, ctx) =>
        res(
            ctx.json([{
                userId: 10,
                id: 100,
                title: 'MSW Mock data',
                body: 'cupiditate quo est a modi nesciunt soluta\n' +
                    'ipsa voluptas error itaque dicta in\n' +
                    'autem qui minus magnam et distinctio eum\n' +
                    'accusamus ratione error aut'
            }])
        )
    ),
];
