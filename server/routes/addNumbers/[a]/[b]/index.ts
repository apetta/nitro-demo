export default eventHandler((event) => {
    const a = getRouterParam(event, "a");
    const b = getRouterParam(event, "b");
    return {
        statusCode: 200,
        body: JSON.stringify({
        result: parseInt(a, 10) + parseInt(b, 10),
        }),
    };
    });
    