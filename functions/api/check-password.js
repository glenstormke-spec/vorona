export async function onRequestPost(context) {

    const data = await context.request.json();

    const password = data.password;

    if (password === context.env.PASSWORD) {

        return Response.json({
            success: true,
            coordinates: context.env.COORDINATES
        });

    }

    return Response.json({
        success: false
    });
}