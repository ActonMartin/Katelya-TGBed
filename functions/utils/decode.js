export async function decode(context) {
    try {
        // 检查是否存在 TG_Bot_Token
        if (context.env.TG_Bot_Token) {
            // 检查是否为 Base64 编码
            if (btoa(atob(context.env.TG_Bot_Token)) === context.env.TG_Bot_Token) {
                context.env.TG_Bot_Token = atob(context.env.TG_Bot_Token);
            }
        }
    } catch (e) {
        // Base64 解码失败，可能不是 Base64 编码，忽略错误
    }
    return await context.next();
}