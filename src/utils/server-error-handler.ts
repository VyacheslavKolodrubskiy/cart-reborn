import type { ErrorType } from 'src/shared/types'

const $q = useQuasar()

export const errors = {
  'Bad Request': 'Произошла ошибка при обработке запроса',
  Unauthorized: 'Необходима авторизация',
  Forbidden: 'Доступ запрещен',
  'Not Found': 'Запрашиваемый ресурс не найден',
  'Internal Server Error': 'Внутренняя ошибка сервера',
} as const

export function serverErrorHandler(error: ErrorType) {
  $q.notify({
    type: 'negative',
    message: errors[error] ?? 'Неизвестная ошибка',
  })
}
