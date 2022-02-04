import { rest } from "msw";

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/posts", (_, res, ctx) => {
        return res(
            ctx.json([
                {
                    userId: 10,
                    id: 100,
                    title: 'Mock data',
                    body: 'cupiditate quo est a modi nesciunt soluta\n' +
                        'ipsa voluptas error itaque dicta in\n' +
                        'autem qui minus magnam et distinctio eum\n' +
                        'accusamus ratione error aut'
                },
                {
                    userId: 10,
                    id: 100,
                    title: 'Mock data',
                    body: 'cupiditate quo est a modi nesciunt soluta\n' +
                        'ipsa voluptas error itaque dicta in\n' +
                        'autem qui minus magnam et distinctio eum\n' +
                        'accusamus ratione error aut'
                }
                ]
            )
    );
    }),
];