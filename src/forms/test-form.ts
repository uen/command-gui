export const TEST_FORM = [
  {
    type: 'section',
    label: 'Network & Geo Restriction',
    children: [
      {
        type: 'grid',
        children: [
          {
            type: 'conditional-input',
            linkedTo: ['geo-location'],
            label: 'Proxy',
            description: 'Enable network proxy when downloading videos',
            children: [
              {
                // Required fields
                type: 'input-block',
                name: 'proxy_url',
                label: 'Proxy URL',
                placeholder: 'Proxy URL',
                description: ` Use the specified HTTP/HTTPS/SOCKS
				  proxy. To enable SOCKS proxy, specify a
				  proper scheme. For example
				  socks5://127.0.0.1:1080/. Pass in an
				  empty string (--proxy "") for direct
				  connection`,
              },

              {
                // Required fields
                label: 'Socket timeout (seconds)',
                type: 'input-block',
                description: 'Time to wait before giving up, in seconds',
                placeholder: '0',
                name: 'socket_timeout',
              },

              {
                // Required fields
                type: 'input-block',
                name: 'source-address',
                label: 'Source address (IP)',
                description: `Client side IP to bind to`,
                placeholder: '127.0.0.1',
              },

              {
                // Required fields
                type: 'switch',
                name: 'force-ip',
                options: [
                  {
                    label: 'Force IPv4',
                    value: 'ipv4',
                  },
                  {
                    label: 'Force IPv6',
                    value: 'ipv6',
                  },
                ],
                placeholder: 'Proxy URL',
                description:
                  'Bypass geographic restriction via faking X-Forwarded-For HTTP header        ',
              },
            ],
          },
          {
            type: 'conditional-input',
            linkedTo: ['geo-location'],
            label: 'Geo restriction',
            description:
              'Bypass geographic restriction via faking X-Forwarded-For HTTP header',
            children: [
              {
                type: 'input-block',
                name: 'first_name',
                label: 'Geo verification proxy (URL)',
                description: `Use this proxy to verify the IP address
				  for some geo-restricted sites. The
				  default proxy specified by --proxy (or
				  none, if the option is not present) is
				  used for the actual downloading.`,
              },
              {
                type: 'checkbox-block',
                name: 'first_name',
                label: 'Geo bypass',
                description: `Bypass geographic restriction via
				  faking X-Forwarded-For HTTP header`,
              },
              {
                type: 'input-block',
                name: 'first_name',
                label: 'Geo bypass country (Code)',
                description: `Force bypass geographic restriction
				with explicitly provided IP block in
				CIDR notation`,
              },
            ],
          },

          {
            // Required fields
            type: 'checkbox-block',
            name: 'first_name',
            label: 'Geo location xxx',
            description:
              'Bypass geographic restriction via faking X-Forwarded-For HTTP header        ',
          },
        ],
      },
    ],
  },

  {
    type: 'submit',
    name: 'submit',
  },
];
