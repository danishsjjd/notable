const numberFormatter = new Intl.NumberFormat()

export type PluralizeProps = {
  singular: string
  plural?: string
  count: number
  showCount?: boolean
  zero?: string // show message on zero
  formatCount?: boolean
}

export const pluralize = ({
  count = 1,
  plural,
  showCount = true,
  singular,
  zero,
  formatCount = true,
}: PluralizeProps) => {
  if (count === 0 && zero) return zero

  let output = singular
  if (count !== 1) {
    output = plural || `${singular}s`
  }

  return showCount ? `${formatCount ? numberFormatter.format(count) : count} ${output}` : output
}

export const Pluralize = (props: PluralizeProps) => {
  return pluralize(props)
}
