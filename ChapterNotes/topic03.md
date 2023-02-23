# Servers

## Windows Server OS
- Different types of OS
    - Desktop/laptop clients machines (general purpose)
    - Workstations (specific tasks)
    - Servers (robust OS)
    - Mobile devices
    - Embedded devices

#### Server vs. Client Operating Systems
- `client OS` should be:
    - easy to use
    - flexible with regard to different / new hardware and software
- `Server OS` should be:
    - robust (against attacks, hardware failures...)
    - scalable
    - efficient (respond to request efficlently)
    - allows different configs

#### Intro to Windows Server
Windows Server OS has a lot of `features` that helps to operate a large number of `Windows client machines`

- Why web server?
    - resource availability
    - be able to config our web server
    - Creating VM on GCP (IaaS)

- example: 
    - `Active Directory` – a directory service with which users, computers, printers etc. are managed
    - `Network infrastructure services`, such as DNS or DHCP (dynamic host protocol service) servers
    - `Print servers`, `Windows update servers`

- ***features are grouped in roles*** that each role can support the features that the role needs

#### Windows Server Roles
- `Active Directory Certificate Services`
    - Dealing with public/private keys
- `Active Directory Domain Services`
    - Managing users, computers, access permissions
    - **Connection with the Group Policy Role**

- `Web Server (IIS)`
- `Application Server`
    - To deploy wep apps
    - Support `.NET (MS scripting language)` framework
- `Failover Clustering`
    - redundant clusters of servers
- `Security and Protection`
    - Encryption
- `Networking`
    - Wired and wireless networks
- `Network Load Balancing`
    - Distributes `network traffic` between `multiple servers`
- `Networking Policy and Access Services`
    - Network security for both wired and wireless networks
- `File and Storage Services`
    - Network drives
- `Print and Document Services`
    - network printers, scanners 
- `Hyper-V`
    - virtual machines under Windows Server
- `Remote Desktop Services`
    - work remotely on the server
- `Telemetry`
    - Tracking important system events
- `Windows Deployment Services`
    - remote installation of Windows on client machines
- `Volume Activation`
    - software licenses
- `Windows Server Update Services`
    - management of Windows and software updates on client machines
- `Windows Server Backup Feature`
    - `back up the server`

#### Different Windows Server Editions
Any edition can be installed with (using RDP) or without (using SSH) a `graphical user interface` (as “Core”)
- **Foundation**: Essential server functionality, `no virtualization`, limited to `15 users` and `32 GB of memory`, one CPU
- **Essentials**: Similar – limited to `25 users` and `64 GB of memory`, two CPUs
- **Standard**: All features, allows `two virtual instances`, `unlimited` users, `4TB limit for memory`
- **Datacenter**: Like standard, except `unlimited number of virtual instances`

## Web server: Internet Information Service (IIS)
- Microsoft's Web Server: IIS
    - It bundles with the Windows OS

#### www services
- Common `HTTP features`:
    - Static Content
    - Default Document
    - Directory Browsing
    - HTTP Errors
    - HTTP Redirection
    - WebDAV Publishing

- `Application Development`:
    - ASP.NET
    - .NET Extensibility
    - ASP
    - CGI: scripting-based language commonly used to create websites. PHP applications typically will require CGI on IIS Server
    - ISAPI Extensions
    - ISAPI Filters
    - Server Side (SSI)

- `Health and Diagnostics`:
    - HTTP Logging
    - Logging Tools
    - Request Monitor
    - Tracing
    - Custom Logging
    - ODBC Logging

- `Security Features`:
    - Basic Authentication `(set up user groups for login)`
    - Windows Authentication
    - Digest Authentication
    - Client Certificate Mapping Authentication
    - IIS Client Certification Mapping Authentication
    - URL Authorization
    - Request Filtering
    - IP and Domain Restrictions

####  History of IIS Features – IIS 1-5
- `IIS 1`: very basic (and rarely used) web server `(respond to static request)`
- `IIS 2.0`: introduced a `management console` and allowed `multiple sites` on a single server
- `IIS 3.0`: introduced support for classic ASP (active server pages) for `dynamic web pages`
- `IIS 4.0`: added an `object-based` version of ASP
- `IIS 5.0/5.1`: more tightly integrated with the OS – IIS became an `operating system service`

#### History of IIS Features – IIS 6
- Bring in `native XML web services`
- Improve scalability and failover
- Improve security
    - IIS not installed by default
    - User code in IIS runs in a `low-privilege` user account
    - Restrictions on transfer of executable files
- Improve request processing for performance and scaling
    - The central `Http.sys listener` distributes requests to a set of processes (`independent`)
        - This improves `stability` (one fails not affect the other)
        - workload can be `split` evenly on multiprocessor systems

#### History of IIS Features – IIS 7
- Full integration of `ASP.NET`
- Shared config files
- Enhance extensibility
- New admin tools
- Ability to delegate configuration responsibilities
    - levels server, site and app
- XML config files
- PowerShell integration
- remote admin and diagnostics features

#### History of IIS Features – IIS 8
- SSL improvement
- Flexible CPU throttling
- Application warm-up
    - Fills up `cache`, generates `content` for first http requests at `startup`
    - **Satisfy requests in Application pool, warm up when IIS start**
- WebSocket implementation
    - API that allows full duplex communication over a single IP address and port
- Dynamic IP restrictions – `blocking` clients that attempt to `open too many connections`

#### History of IIS Features – IIS 8.5
- New features:
    - Enhanced logging
    - Dynamic site activation (worker process initialization), `pick and handle Application pools`
    - Application initialization (application framework pre-load)
    - Server name indication (virtual domain name)
    - CPU throttling

#### History of IIS Features – IIS 10
- HTTP 2
    - efficient `reuse of connections` and a reduction in latency.
- Nano Server Support
    - `Smaller` footprint server requires `less resources`, `less susceptible to attacks`
- Containers integration 

## IIS Architecture
1. `Kernel Mode` and `User Mode`
    - Kernel (System) Mode:
        - The executing code has `unrestricted access` to underlying hardware
        - Reserved for `trusted functions` of OS
        - Crashes in Kernel Mode will `halt` the `whole system`

    - User mode:
        - The executing code does `not have ability to access` hardware or reference memory (must thru API calls)
        - Crashes can be `recovered`

2. IIS is a `request processing` architecture:
    - Windows Process Activation Service (WAS) enables sites to use protocols (other than HTTP and HTTPS)
    - can be customized by adding or removing `modules`
    - Integrated `request-processing pipelines` from IIS and ASP.NET

#### IIS components and features
- Protocol listeners: `HTTP.sys`
    - Listen protocol-specific `request` -> forward to IIS web server -> return response

- World Wide Web Publishing Service `(WWW service)`
    - responsible for managing the configure and update HTTP.sys and notify WAS about any changes

- Windows Process Activation Service (WAS)
    - Manages and monitor `worker process` that handle `request`
    - `worker process`: 
        - is user-mode code whose role is to process requests
        - Controlled by `WWW service`
        - uses and executable called W3wp.exe
        - allowed to run application code (ASP.NET and PHP applications)

- `IIS features` -> `loadable modules`
    - Example: HTTP, security, content, compression, logging, etc

#### IIS request processing
1. `HTTP.sys` intercepts the incoming HTTP request from client (check for validity of the request and see if the request is in cache)
2.  `HTTP.sys` contacts `Windows Process Activation Service (WAS)` to obtain configuration information from the `applicationHost.config` file (in the system directory)
3.  World Wide Web Publishing Service (WWW service) then `retrieves the configuration` information from `WAS`
4. WWW uses the config file to `config HTTP.sys`
5. WWW activates the Application pool, WAS starts a worker process
6. The `worker process` begins to process it and sends the `response` back to `HTTP.sys`, which sends it back to the client.

## Apache Architecture
- Apache consists of relatively `small core` with a number of `modules`
- In apache, enables a module whenever we needs it (similar to Application pool in IIS)
- `Core module` (actively listen for request): `MPM` - system level `multi-processing module`
    - Forking processes on UNIX/LINUX 
    - `MPM` handles the `multi-processing task` so that Apache do not need to worry about the OS
- `APR (Apache Portable Runtime) libraries`: cross-platform OS layer and utilities

#### IIS architecture vs. Apache architecture
- IIS: independent Application pools
- Apache: multiple modules (could be overlapped), to handle a request in a pipeline, instead of pre-defined applcation pool

#### Apache Core
- Handles the `basic functionality` of the web server
- e.g. allocating requests and maintaining and pooling all connections

#### Apache Modules
- Extend/overwrite or implement `additional functionality` to the Apache core
- Do `not know` directly about `each other` and `not one module alone` can completely fill or process the request that is made to the Apache server.
- `Requests process` (more below):
    1. sending the info from one `module` back to the `core`
    2. then info forwards to `another module` until request is handled
    3. finally sent back to `client`

#### Apache operation
- Two-phase operation:
    1. Start-up:
        - Read configuration, load modules and libraries
        - Initialized required resources
        - Single process, single thread program and full system privileges
    2. Operational: 
        - Normal operation by MPM
        - Run as unprivileged user

#### IIS vs. Apache
- IIS is `multi-threaded` web server
    - whenever request comes in, `new thread` from the pool is assigned to handle it
    - more `efficient` in terms of resource usage
    - threads are `lightweight`

- Apache is `multi-process` web server
    - whenever request comes in, apache forks a `new process` to handle it
    - easy to handle
    - better `isolation` between connections

#### Apache request processing
- `Content generator` handles all the `functions` of the webserver
- Apache `splits the request` into different `phases`: 
    - The `request URL` is matched with the `configuration` to select the appropriate `content generator`
    - `content generator` is then responsible for further processing the request, such as `checking the MIME file type`, `enforcing server access rules`, and applying any `alias` or `rewrite engine` rules

## Apache Configuration
- Main configuration file `httpd.conf`
    - coule be a `single file` or `distributed over several files (using include directive)`
    - Types of information in `httpd.conf`
        - `Documentation` or `comments` (starts with #) – indicates what's available for users
        - `Directives` – settings for various `apache parameters`, the ability to change characteristics of server
        - `Containers` – directives that will take effect on specific entities such as `directories`, `files` or `URLs`, like a box applied to different portions

#### Apache directives
- can be implemented by the `core` or `modules`
- can have zero or more argument separated by whitespace
- **Applies to the server as a whole**
- Basic directives:
    `ServerRoot` and `DocumentRoot` in different directory. The configuration file should `not be writetable`
    - `ServerRoot`: 
        - root of the server
        - where you config files
        - highest permission
    - `DocumentRoot`: 
        - root of the web directory
- More directives:
    - `DirectoryIndex` – Define the default page
    - `ServerName` – What the server called (DNS)
    - `ServerSignature` – Attach server version / name to respond msgs, i.e. error msg
    - `Listen` – what port we are listening for on the server
    - `LoadModule` – Load the specified module
    - `AddType` – Add more encoding, allows the server to identify the `correct content type` for a file
    - `Include` – Location of `additional` configuration file

#### Containers
- Special form of directive (using `<>`)that applies to `specific resources`: directory, files or urls
- `Format`:
    - Opening container: `<Directory “c:/wamp/www”>`
    - Directives for the container (one per line)
    - Closing container: `</Directory>`
- `Good`: 
    - Config file can be divided into `different files` and put on `different location`
    - `Increase server's security`: server files and website directories on different location
- `Bad`:
    - Need to `specify the directory locations` appropriately
- Examples:
    - **Directory** – apply to anything in this directory (and subdirectories)
    - **Files** – apply to the listed file(s)
    - **IfDefine** – apply only if the given parameter in this statement was given on the command line when Apache was invoked
    - **IfModule** – apply only if specified module is loaded
    - **Location** – apply only to the given URL(s)
    - **VirtualHost** – apply only to this particular virtual host

#### Protecting directories
- The default configuration for `server’s root folder` (strict to security):
        
        <Directory />
            AllowOverride none # Cannot override rule
            Require all denied # Deny all
        </Directory>

- The default configuration for server’s `document root` folder:
    
        <Directory “c:/wamp/www”>
            AllowOverride all # Can override rule
            Require local # Allow local connection
        </Directory>

#### Overrides
- Typically, any directive defined for a `<Directory>` (or `<Files>` or
`<Location>`) container will **override** the definition from the server
configuration

## Apache Virtual Host
#### Virtual hosting
Serving `multiple web sites` on one apache server

- **Why virtual hosting?**
    - partition their website into `different domains`
    - A service provider offering `multiple sites domain`
    - A company may give each of their employee their `own domain`

- Benefits:
    - Cleaner URL
    - Easier to implement permission
    - Completely `separate directory structures` of different “servers”
    - From the developers point of view, they think they are working on `different sites/servers` instead of different folder in the same server

#### virtual host in Apache
- `mod_vhost_alias` module provide virtual host
- Configured using `VirtualHost` container
- It is a `virtual server` that can have its own:
    - Server name, domain and admin
    - IP address and port binding (can be configured to use SSL)
    - Error log files, etc

1. **Enables module**

        sudo ln -s vhost_alias.load ../mods-enabled/vhost_alias.load

2. **Add the container for vhost**

        <VirtualHost *:8080>
        ServerName mysite1.cmpt372.com
        DocumentRoot "c:\webs\site1"
        <Directory "c:\webs\site1">
            Options +Indexes +Includes +FollowSymLinks +MultiViews
            AllowOverride All
            Require local
            DirectoryIndex site1_file.html
        </Directory>
        </VirtualHost>

## XAMPP Server
- XAMPP
    - Cross platform
    - Apache (Web Server)
    - MySQL (Database)
    - PHP, Pearl (Scripting)

- web environment (AMPP) are in `c:/wampp/` folder
- web root is at `c:/xampp/htdocs`
- Includes `phpMyAdmin`, a web interface for `MySQL` database