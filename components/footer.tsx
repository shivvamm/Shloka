export default function footer() {
  return (
    <div className="container relative mx-auto max-w-4xl py-10 mt-18 text-center">
      <p>
        Created ❤️ by{' '}
        <a href="https://mrshivam.netlify.app/" target="_blank">
          shivam
        </a>{' '}
        © {new Date().getFullYear()}
      </p>
    </div>
  );
}
