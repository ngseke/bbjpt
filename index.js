#!/usr/bin/env node
console.log('\ud83e\uddca\u2668\ufe0f')
const atob = (_) => Buffer.from(_, 'base64').toString('utf8')
require('open')(atob('aHR0cHM6Ly95b3V0dS5iZS91b3FKeV9BRXQtRQ=='))
