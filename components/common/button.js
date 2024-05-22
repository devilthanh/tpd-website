const variants = {
  primary: "text-white bg-primary-600"
}

const Button = ({text, variant = "primary"}) => {
  return (
    <button className={`font-semibold px-5 py-3 rounded-lg ${variants[variant]}`}>
      {text}
    </button>
  )
}

export default Button;