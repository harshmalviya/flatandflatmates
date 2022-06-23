import React, { useState } from 'react';
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <main
      className="w-100 d-flex justify-content-center align-items-center "
      style={{ height: '100vh' }}
    >
      <div
        className="shadow-lg p-5 d-flex flex-column align-items-center"
        style={{ minWidth: '360px' }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/logo.svg"
            alt=""
            className="mb-3"
            style={{ height: '5rem', width: '5rem' }}
          />
          <p className="fw-bold">
            <span className="text-primary">Flat</span>and
            <span className="text-secondary">Flatmates</span>
          </p>
        </div>
        <div className="border-bottom w-100 border-lightDark mb-3"></div>

        <div>
          <p className="fw-normal">{isLogin ? 'Login' : 'Sign Up'}</p>
        </div>
        <div className="w-100">
          <form>
            {!isLogin && (
              <div className="mb-4 d-flex gap-2 justify-content-between">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-primary px-3 py-2 loginInput rounded-2"
                    placeholder="First Name"
                    style={{ maxWidth: '130px' }}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-primary px-3 py-2 loginInput rounded-2"
                    placeholder="Last Name"
                    style={{ maxWidth: '130px' }}
                  />
                </div>
              </div>
            )}
            <div class="input-group mb-4">
              <input
                type="email"
                className="form-control border-primary px-3 py-2 loginInput rounded-2"
                placeholder="Enter your email address"
              />
            </div>
            <div class="input-group mb-4">
              <input
                type="password"
                className="form-control border-primary px-3 py-2 loginInput rounded-2"
                placeholder="Enter your password"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                <i className="fa-regular fa-eye"></i>
              </button>
            </div>
            {!isLogin && (
              <div class="input-group mb-4">
                <input
                  type="password"
                  className="form-control border-primary px-3 py-2 loginInput rounded-2"
                  placeholder="Re-enter your password"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            )}
            <div className="d-flex flex-column justify-content-center text-center">
              <div>
                <button
                  type="button"
                  class="btn btn-primary text-white py-1 px-5 mb-1"
                  style={{ fontSize: '.9rem' }}
                >
                  {isLogin ? 'LOGIN' : 'SIGN UP'}
                </button>
              </div>
              {isLogin ? (
                <a
                  href="/forgotPassword"
                  className="text-dark text-decoration-none fw-normal mb-3"
                  style={{ fontSize: '.9rem' }}
                >
                  Forgot Password?
                </a>
              ) : (
                <p
                  onClick={() => setIsLogin(!isLogin)}
                  className="btn text-dark text-decoration-none fw-normal mb-0"
                  style={{ fontSize: '.9rem' }}
                >
                  Already Registered?
                </p>
              )}
            </div>
          </form>
          {isLogin && (
            <div className="d-flex justify-content-between px-4">
              <button
                type="button"
                className="btn btn-outline-dark fw-bold"
                style={{ fontSize: '.8rem' }}
              >
                <i className="fa-brands fa-google me-1"></i>Google
              </button>
              <div class="vr"></div>
              <button
                onClick={() => setIsLogin(!isLogin)}
                type="button"
                className="btn btn-outline-dark fw-bold"
                style={{ fontSize: '.8rem' }}
              >
                <i className="fa-solid fa-user text-primary me-1"></i>Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AuthPage;
