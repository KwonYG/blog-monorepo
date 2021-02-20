/**
 * base: 기본 스타일 (변경불가)
 * default: prop의 기본 값 (변경가능)
 */
export default {
  card: {
    base:
      'yg-card relative rounded-lg border-2 border-gray-200 dark:bg-gray-800 w-max overflow-hidden',
    default: '', // TODO: border 굵기옵션, border 색상옵션,
  },
  cardHeader: {
    base: 'text-5xl',
  },
  cardBody: {
    base: 'yg-card-body p-100',
  },
}
