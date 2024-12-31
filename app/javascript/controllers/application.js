import { Application } from "@hotwired/stimulus"

import "../stylesheets/authentication.css";

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
