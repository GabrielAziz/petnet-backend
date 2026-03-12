import prisma from '../../prisma/prisma.js';

/**
 * Busca usuário por e-mail para autenticação.
 * Filtra usuários deletados (excluded_at: null) e seleciona
 * apenas os campos necessários — incluindo a senha para comparação.
 *
 * Nota: Este select não expõe a senha na resposta da API,
 * pois o controller retorna apenas { cpf, name, type }.
 */
export const findUserByEmailForAuth = async (email) => {
    return await prisma.user.findFirst({
        where: { email, excluded_at: null },
        select: {
            cpf: true,
            name: true,
            email: true,
            password: true, // necessário para bcrypt.compare no service
            type: true,
        },
    });
};
