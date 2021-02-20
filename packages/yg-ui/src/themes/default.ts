/**
 * base: 기본 스타일 (변경불가)
 * default: prop의 기본 값 (변경가능)
 */
export default {
  card: {
    base:
      'yg-card rounded-lg border-4 border-gray-200 dark:bg-gray-800 w-max overflow-hidden',
    default: '', // TODO: 카드에 줄 옵션들 생각해보기
  },
  cardHeader: {
    base: 'text-5xl',
  },
  cardBody: {
    base: 'yg-card-body p-100',
  },
}
