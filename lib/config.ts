export const CONFIG = {
  // Rate limits (requests per minute)
  rateLimits: {
    enabled: false, // Flag to enable/disable rate limiting
    search: 10,
    contentFetch: 20,
    reportGeneration: 5,
    agentOptimizations: 10,
  },

  // Search settings
  search: {
    resultsPerPage: 10,
    maxSelectableResults: 3,
    provider: 'google' as 'google' | 'bing' | 'exa', // Default search provider
    safeSearch: {
      google: 'active' as 'active' | 'off',
      bing: 'moderate' as 'moderate' | 'strict' | 'off',
    },
    market: 'en-US',
  },

  // AI Platform settings
  platforms: {
    google: {
      enabled: false,
      models: {
        'gemini-flash': {
          enabled: true,
          label: 'Gemini Flash',
        },
        'gemini-flash-thinking': {
          enabled: true,
          label: 'Gemini Flash Thinking',
        },
        'gemini-exp': {
          enabled: false,
          label: 'Gemini Exp',
        },
      },
    },
    ollama: {
      enabled: false,
      models: {
        'deepseek-r1:1.5b': {
          enabled: false,
          label: 'DeepSeek R1 1.5B',
        },
      },
    },
    openai: {
      enabled: true,
      models: {
        'gpt-4o': {
          enabled: true,
          label: 'GPT-4o',
        },
        'gpt-4o-mini': {
          enabled: true,
          label: 'GPT-4o-mini',
        },
        'gpt-4.1': {
          enabled: true,
          label: 'GPT-4.1',
        },
        'gpt-4.1-mini': {
          enabled: true,
          label: 'GPT-4.1-mini',
        },
        'o3-mini': {
          enabled: false,
          label: 'o3-mini',
        },
        'o1': {
          enabled: false,
          label: 'o1',
        },
      },
    },
    anthropic: {
      enabled: false,
      models: {
        'claude-3-7-sonnet-latest': {
          enabled: false,
          label: 'Claude 3.7 Sonnet',
        },
        'claude-3-5-haiku-latest': {
          enabled: false,
          label: 'Claude 3.5 Haiku',
        },
      },
    },
    deepseek: {
      enabled: false,
      models: {
        chat: {
          enabled: false,
          label: 'Chat',
        },
        reasoner: {
          enabled: false,
          label: 'Reasoner',
        },
      },
    },
    openrouter: {
      enabled: false,
      models: {
        'openrouter/auto': {
          enabled: false,
          label: 'Auto',
        },
      },
    },
  },
} as const
