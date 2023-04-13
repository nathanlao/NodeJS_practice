## Security Basic Principles

The CIA Triad:
- Confidentially: maintain privacy of data
- Integrity: reality of data
- Availability: availability of data

Risk assessment:
- Actors, `where the threads come from`
    - Internal: `within the organization`
    - External: `Outside the organization`
    - Partner: `alliliated with organization`
- Impact
    - A loss of availability: prevents users from accessing systems
    - A loss of confidentiality: disclosure of confidential information
    - A loss of integrity: changes your data or prevents you from having correct data
- Threats, `thru which path to the app to cause harm`
    - **STRIDE**
        - Spoofing
        - Tampering
        - Repudiation
        - Information disclosure
        - Denial of service
        - Elevation of privilege

- Vulnerabilities `security holes in exact app that exploiting the threads`


## Authentication
Authorization defines what `rights` and `privileges` a user has once they are authenticated

1. What you `know` (Knowledge)
    - i.e. Passwords, PINs, security questions
2. What you `have` (Ownership)
    - i.e. Access cards, cell phones, FOBs
3. What you `are` (Inherence)
    - i.e. retinas, fingerprints, DNA

- Single-factor authentication
- Multifactor authentication

- HTTP supports several different forms of authentication via the www-authenticate response header
    - HTTP Basic Authentication
    - HTTP Digest Authentication
    - Form-Based Authentication

## Cryptography
## HTTPS
## Threat Vectors