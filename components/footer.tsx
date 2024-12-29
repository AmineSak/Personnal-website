export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary rounded-md text-primary-content p-10">
      <aside>
        <p className="font-bold">Amine's personnal website</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https:\\github.com\AmineSak">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.683-.217.683-.483 0-.237-.009-.868-.014-1.704-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.092.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 5 0c1.91-1.296 2.75-1.026 2.75-1.026.544 1.377.201 2.394.099 2.647.64.7 1.029 1.591 1.029 2.683 0 3.845-2.337 4.687-4.566 4.936.36.31.681.919.681 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/amine-sakouhi-6a3268246/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.59c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97v5.68h-3v-10h2.89v1.37h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.55z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
