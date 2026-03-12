/**
 * Valida se a senha atende aos requisitos mínimos de segurança:
 * - Mínimo de 8 caracteres
 * - Pelo menos 1 letra maiúscula
 * - Pelo menos 1 letra minúscula
 * - Pelo menos 1 número
 *
 * @param {string} password - Senha em texto plano
 * @throws {Error} Se a senha não atender algum requisito
 */
export const validatePassword = (password) => {
    if (!password || password.length < 8) {
        throw new Error('A senha deve ter no mínimo 8 caracteres.');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('A senha deve conter pelo menos 1 letra maiúscula.');
    }
    if (!/[a-z]/.test(password)) {
        throw new Error('A senha deve conter pelo menos 1 letra minúscula.');
    }
    if (!/[0-9]/.test(password)) {
        throw new Error('A senha deve conter pelo menos 1 número.');
    }
};
