import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start fixed-bottom">
  <div class="text-center p-3">
    © 2020 Copyright:
    <Link className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
</footer>
  )
}
