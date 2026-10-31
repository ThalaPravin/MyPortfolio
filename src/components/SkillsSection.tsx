"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, CheckCircle2 } from "lucide-react";

// Official Tech Brand SVG Logos
export const TechLogos: Record<string, React.FC<{ className?: string }>> = {
  Go: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.811 10.231c.427 0 .807.036 1.141.107.334.072.637.18.908.324.272.145.498.327.678.547.181.22.302.483.364.789l-1.391.564c-.053-.16-.134-.298-.242-.413a.965.965 0 00-.376-.248 1.488 1.488 0 00-.472-.119 3.018 3.018 0 00-.528-.041c-.347 0-.649.06-.906.18-.258.12-.469.288-.634.504-.165.216-.285.476-.36.78a3.673 3.673 0 00-.113 1.002c0 .356.037.69.113 1.002.075.312.195.579.36.801.165.222.376.395.634.52.257.124.559.186.906.186.365 0 .685-.067.96-.201.275-.134.484-.33.628-.588h-1.687v-1.282h3.189v3.255h-.953l-.181-.722c-.183.275-.436.495-.758.66a2.76 2.76 0 01-1.309.247c-.546 0-1.033-.095-1.46-.284a3.176 3.176 0 01-1.077-.79 3.513 3.513 0 01-.678-1.213 4.887 4.887 0 01-.237-1.55c0-.547.079-1.066.237-1.558.158-.492.384-.91.678-1.254.294-.344.653-.61 1.077-.798.424-.188.91-.282 1.457-.282v.001zm5.952 0c.553 0 1.036.095 1.45.285.414.19.76.453 1.038.79.278.337.487.747.627 1.23.14.483.21 1.02.21 1.611 0 .584-.07 1.115-.21 1.593a3.528 3.528 0 01-.627 1.235 2.656 2.656 0 01-1.038.807c-.414.196-.897.294-1.45.294-.56 0-1.047-.098-1.461-.294a2.678 2.678 0 01-1.044-.807 3.528 3.528 0 01-.634-1.235c-.145-.478-.217-1.009-.217-1.593 0-.591.072-1.128.217-1.611.145-.483.356-.893.634-1.23a2.678 2.678 0 011.044-.79c.414-.19.901-.285 1.461-.285zm0 1.253c-.328 0-.613.064-.855.192a1.767 1.767 0 00-.606.541 2.593 2.593 0 00-.36.837 4.19 4.19 0 00-.125 1.073c0 .385.042.744.125 1.079.083.334.203.616.36.843.158.228.36.4.606.518.242.117.527.176.855.176.321 0 .604-.059.849-.176a1.776 1.776 0 00.606-.518c.158-.227.28-.509.366-.843.087-.335.13-.694.13-1.079 0-.38-.043-.737-.13-1.073a2.535 2.535 0 00-.366-.837 1.83 1.83 0 00-.606-.541 1.944 1.944 0 00-.849-.192z" />
    </svg>
  ),
  Java: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.851 18.56s-.917.534.667.72c2.253.264 3.767.24 6.427-.294 0 0 .633.393 1.307.726-5.067 2.146-12.013-.207-8.397-1.152zm-1.08-3.006s-1.113.68.513.88c2.407.294 4.88.24 8.707-.406 0 0 .42.446 1.047.7-6.287 1.946-13.78-.187-10.267-1.174zm7.98-4.567c.773 1.054-.18 2.067-.18 2.067s2.58-1.34 1.38-3.08c-1.16-1.68-2.687-2.527-5.467-3.927 0 0 3.327 1.48 4.267 4.94zm-6.2 3.34c3.42.347 7.08-.2 7.08-.2s-.52.42-1.28.693c-4.42 1.58-10.74-.08-5.8-1.493zm7.04-5.38c.633.913-.1 1.76-.1 1.76s2.173-1.127 1.153-2.613c-.987-1.44-2.273-2.16-4.633-3.36 0 0 2.827 1.267 3.58 4.213z" />
    </svg>
  ),
  "C++": ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5c1.44 0 2.73.68 3.56 1.73l-1.64 1.15c-.47-.58-1.18-.98-1.92-.98-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6c.74 0 1.45-.4 1.92-.98l1.64 1.15c-.83 1.05-2.12 1.73-3.56 1.73zm5-5.5h1.5v-1.5h1v1.5H20v1h-1.5V15h-1v-1.5H16v-1zm4.5 0H22v-1.5h1v1.5h1.5v1H23V15h-1v-1.5h-1.5v-1z" />
    </svg>
  ),
  Python: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.914 0C5.82 0 6.2 2.646 6.2 2.646l.006 2.74h5.802v.824H3.864S0 5.768 0 11.895c0 6.126 3.398 5.92 3.398 5.92h2.029v-2.856s-.11-3.411 3.355-3.411h5.763s3.23.053 3.23-3.136V2.646S18.232 0 11.914 0zm-3.26 1.838a1.05 1.05 0 110 2.102 1.05 1.05 0 010-2.102zm3.432 22.162c6.094 0 5.714-2.646 5.714-2.646l-.006-2.74h-5.802v-.824h8.144s3.864.442 3.864-5.685c0-6.126-3.398-5.92-3.398-5.92h-2.029v2.856s.11 3.411-3.355 3.411H8.536s-3.23-.053-3.23 3.136v5.774s-.474 2.646 5.844 2.646zm3.26-1.838a1.05 1.05 0 110-2.102 1.05 1.05 0 010 2.102z" />
    </svg>
  ),
  TypeScript: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM11.99 11.83h-3.66v9.062h-2.22V11.83H2.45v-1.922h9.54V11.83zm3.797 9.176c-1.531 0-2.793-.477-3.562-1.398l1.453-1.547c.563.633 1.258.984 2.102.984.977 0 1.555-.43 1.555-1.078 0-.64-.477-.96-1.633-1.328-1.875-.594-3.078-1.375-3.078-2.938 0-1.82 1.484-3.031 3.555-3.031 1.344 0 2.43.39 3.25 1.156l-1.344 1.578c-.531-.492-1.188-.734-1.89-.734-.82 0-1.344.406-1.344.977 0 .594.469.875 1.688 1.266 1.953.625 3.031 1.43 3.031 3.016 0 1.977-1.578 3.078-3.781 3.078z" />
    </svg>
  ),
  "Spring Boot": ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.748 10.362a2.378 2.378 0 00-.776-1.34L13.82 3.327a2.38 2.38 0 00-2.825 0L3.842 9.022a2.38 2.38 0 00-.777 1.34c-.114.735.093 1.48.572 2.05l7.153 5.695c.81.644 1.93.644 2.74 0l7.153-5.695a2.38 2.38 0 00.572-2.05h.493zm-9.336 4.793a3.569 3.569 0 01-3.568-3.568c0-.756.242-1.46.666-2.038l4.94 4.94a3.542 3.542 0 01-2.038.666zm3.568-3.568c0 .756-.242 1.46-.666 2.038l-4.94-4.94c.578-.424 1.282-.666 2.038-.666a3.569 3.569 0 013.568 3.568z" />
    </svg>
  ),
  Kafka: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  PostgreSQL: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.015 0C5.38 0 0 5.38 0 12.015c0 6.634 5.38 12.015 12.015 12.015 6.634 0 12.015-5.381 12.015-12.015C24.03 5.38 18.65 0 12.015 0zm6.064 16.273c-.482.724-1.267 1.258-2.197 1.488-.568.14-1.168.156-1.748.048-1.18-.22-2.22-.888-2.92-1.874-.325-.458-.57-.968-.72-1.507-.367-1.32-.232-2.73.376-3.953.585-1.176 1.585-2.083 2.793-2.534.618-.23 1.272-.338 1.93-.319 1.096.033 2.155.452 2.97 1.176.435.386.79.852 1.042 1.373-.77.348-1.637.525-2.52.516-.995-.01-1.966-.25-2.846-.7-.184.283-.324.593-.414.92-.178.647-.156 1.33.063 1.962.247.712.72 1.314 1.34 1.705.597.377 1.3.542 2.006.47.666-.068 1.298-.35 1.785-.806.312-.292.56-.647.733-1.038l1.07.073z" />
    </svg>
  ),
  Redis: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.579 5.867L12.56 1.026a1.233 1.233 0 00-1.12 0L2.42 5.867a1.246 1.246 0 00-.638 1.085v9.696c0 .445.24.854.638 1.085l9.02 4.841c.174.093.366.14.56.14.194 0 .386-.047.56-.14l9.02-4.841a1.246 1.246 0 00.638-1.085V6.952a1.246 1.246 0 00-.639-1.085zm-9.58-3.435l7.636 4.098-2.613 1.4-7.636-4.097 2.613-1.401zm-1.998 1.071l7.636 4.098-2.613 1.401-7.636-4.098 2.613-1.401zm-5.756 4.67l3.754 2.014-2.613 1.402-3.754-2.014 2.613-1.402zm15.474 9.176l-7.72 4.143v-7.818l7.72-4.143v7.818z" />
    </svg>
  ),
  MongoDB: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 0C11.64 0 11.28.14 11.02.41 8.52 3.01 4.5 9.07 4.5 14.5c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-5.43-4.02-11.49-6.52-14.09a1.4 1.4 0 00-.979-.41zm-.001 2.2c1.9 2.2 5.3 7.5 5.3 12.3 0 2.93-2.37 5.3-5.3 5.3s-5.3-2.37-5.3-5.3c0-4.8 3.4-10.1 5.3-12.3z" />
    </svg>
  ),
  Docker: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.084.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.99 12.02c-.38-.28-1.53-.42-2.39-.33-.14-.73-.55-1.37-1.16-1.8-.75-.52-1.76-.6-2.58-.2-.36-.92-1.12-1.61-2.07-1.9-.38-.12-.78-.18-1.18-.18h-.12c-.15-.02-.3-.02-.45-.02H.66c-.19 0-.37.08-.5.22-.12.14-.18.33-.16.52.41 3.51 2.37 6.64 5.37 8.56 2.05 1.31 4.47 2.01 6.95 2.01 7.76 0 11.67-4.87 11.67-6.88 0-.35 0-.7-.01-1.04v.04z" />
    </svg>
  ),
  Kubernetes: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.968 0a1.18 1.18 0 00-.594.161L2.14 5.485a1.182 1.182 0 00-.593 1.026v10.978c0 .426.228.818.593 1.026l9.234 5.324a1.183 1.183 0 001.188 0l9.234-5.324a1.182 1.182 0 00.593-1.026V6.511c0-.426-.228-.818-.593-1.026L12.562.161A1.18 1.18 0 0011.968 0zm.032 2.39l7.74 4.462-2.53 1.46-5.21-3.003V2.39zm-1.04.004v2.923L5.75 8.32 3.22 6.86l7.74-4.466zM2.613 8.358l2.53 1.46v6.007l-2.53-1.46V8.358zm18.774 0v6.007l-2.53 1.46v-6.007l2.53-1.46zm-9.387 1.41l3.64 2.1-3.64 2.102-3.64-2.102 3.64-2.1zm-6.25 4.382l5.21 3.008v2.923l-7.74-4.47 2.53-1.461zm12.5 0l2.53 1.46-7.74 4.47v-2.923l5.21-3.007z" />
    </svg>
  ),
  AWS: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.574 14.524c-.732 0-1.32-.192-1.765-.575-.444-.383-.667-.933-.667-1.65 0-.742.235-1.312.705-1.708.47-.397 1.137-.595 2.001-.595.69 0 1.25.093 1.68.277v-.368c0-.52-.14-.908-.42-1.164-.28-.256-.708-.384-1.284-.384-.45 0-.895.076-1.336.228-.44.152-.853.385-1.238.7l-.65-.968c.477-.384 1.01-.673 1.6-.868.59-.195 1.19-.292 1.8-.292.99 0 1.737.234 2.24.703.504.468.756 1.165.756 2.09v4.288h-1.34l-.134-.73c-.39.297-.812.52-1.266.67-.454.15-.994.225-1.62.225zm.482-1.18c.48 0 .918-.112 1.313-.337.395-.224.636-.554.723-.99v-.532c-.37-.16-.867-.24-1.49-.24-.593 0-1.025.116-1.296.348-.27.232-.406.55-.406.953 0 .39.116.67.348.84.232.17.498.258.808.258v-1.29zm8.563 1.18c-.89 0-1.58-.29-2.072-.87-.492-.58-.738-1.408-.738-2.484 0-1.08.246-1.91.738-2.49.492-.58 1.18-.87 2.072-.87.49 0 .93.09 1.32.27.39.18.7.44.93.78l.11-.91h1.34v7.24h-1.34l-.11-.91c-.23.34-.54.6-.93.78-.39.18-.83.27-1.32.27zm.37-1.21c.54 0 .96-.18 1.26-.54.3-.36.45-.91.45-1.65s-.15-1.28-.45-1.64c-.3-.36-.72-.54-1.26-.54-.54 0-.96.18-1.26.54-.3.36-.45.9-.45 1.64 0 .74.15 1.29.45 1.65.3.36.72.54 1.26.54zm-12.78 6.94c5.15 2.76 11.45 2.76 16.6 0 .42-.23.86.17.58.55-4.8 6.27-12.96 6.27-17.76 0-.28-.38.16-.78.58-.55z" />
    </svg>
  ),
  Jenkins: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  n8n: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.57 7.05a4.2 4.2 0 00-3.72-2.18 4.2 4.2 0 00-3.65 2.12L9.5 15.17l-1.92-3.15a4.2 4.2 0 00-3.65-2.12 4.2 4.2 0 00-4.2 4.2 4.2 4.2 0 004.2 4.2c1.47 0 2.82-.78 3.55-2.02l2.02-3.4 4.7 7.7a4.2 4.2 0 003.65 2.12 4.2 4.2 0 004.2-4.2c0-1.47-.78-2.82-2.02-3.55l1.54-2.6a4.2 4.2 0 000-5.81zM3.93 15.9a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm13.92-6.5a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm0 9.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z" />
    </svg>
  ),
  LLMs: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0010.428.1a6.04 6.04 0 00-5.77 4.148 6.05 6.05 0 00-3.99 2.899 6.027 6.027 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 23.9a6.05 6.05 0 005.771-4.14 6.05 6.05 0 003.99-2.9 6.03 6.03 0 00-.74-7.039zm-8.29 12.634a4.57 4.57 0 01-2.99-1.115l.14-.08 4.93-2.846a.78.78 0 00.39-.675v-6.953l2.08 1.202a.06.06 0 01.03.045v5.82a4.58 4.58 0 01-4.58 4.602zM3.867 18.06a4.56 4.56 0 01-.58-3.141l.14.083 4.93 2.846a.78.78 0 00.78 0l6.02-3.477v2.404a.06.06 0 01-.03.052l-5.04 2.91a4.58 4.58 0 01-6.22-1.677zm-1.89-9.52a4.55 4.55 0 012.41-2.026v5.856a.78.78 0 00.39.675l6.02 3.477-2.08 1.2a.06.06 0 01-.06 0l-5.04-2.91a4.58 4.58 0 01-1.64-6.272zm14.34 2.404l-6.02-3.477 2.08-1.201a.06.06 0 01.06 0l5.04 2.91a4.58 4.58 0 01-1.16 8.358v-5.915a.78.78 0 00-.39-.675h.39zm3.82-2.404a4.56 4.56 0 01.58 3.14l-.14-.08-4.93-2.847a.78.78 0 00-.78 0l-6.02 3.477v-2.404a.06.06 0 01.03-.052l5.04-2.91a4.58 4.58 0 016.22 1.676zm-9.84-2.484v5.694l-4.93-2.847a.06.06 0 01-.03-.045V3.038a4.58 4.58 0 017.57-2.443l-.14.08-2.47 1.425v.001z" />
    </svg>
  ),
  Linux: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.003 0c-2.316 0-4.148 1.947-4.148 4.398 0 .546.096 1.07.272 1.554C6.467 6.643 5.2 8.423 5.2 10.518c0 2.45 1.547 4.5 3.738 5.143-.377.927-.588 1.954-.588 3.037 0 .513.048 1.013.143 1.494-1.23.473-2.096 1.677-2.096 3.09 0 .4.066.784.188 1.144.37.195.83.308 1.32.308 1.83 0 3.32-1.464 3.39-3.284.23.032.46.048.707.048s.477-.016.707-.048c.07 1.82 1.56 3.284 3.39 3.284.49 0 .95-.113 1.32-.308.122-.36.188-.744.188-1.144 0-1.413-.866-2.617-2.096-3.09.095-.48.143-.98.143-1.494 0-1.083-.21-2.11-.588-3.037 2.19-.643 3.737-2.693 3.737-5.143 0-2.095-1.267-3.875-2.927-4.566.176-.484.272-1.008.272-1.554C16.151 1.947 14.32 0 12.003 0z" />
    </svg>
  ),
  Git: ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.126 0L8.808 2.585l3.228 3.228a1.782 1.782 0 011.512 2.378l2.96 2.96a1.782 1.782 0 012.38 1.513l4.658-4.658a1.5 1.5 0 000-2.076zM15.42 16.91a1.78 1.78 0 01-2.222-1.418L10.32 12.61a1.78 1.78 0 01-1.418 2.222l-4.658 4.658a1.5 1.5 0 000 2.126l10.478 10.478a1.5 1.5 0 002.126 0l10.478-10.478a1.5 1.5 0 000-2.126L15.42 16.91zM2.585 8.808L.452 10.94a1.5 1.5 0 000 2.126l10.478 10.478a1.5 1.5 0 002.126 0l2.132-2.133-3.228-3.228a1.782 1.782 0 01-2.38-1.512l-2.96-2.96a1.782 1.782 0 01-1.513-2.38L2.585 8.808z" />
    </svg>
  ),
};

interface SkillItem {
  name: string;
  category: "languages" | "backend" | "databases" | "devops" | "ai-architecture";
  level: "Production Core" | "Enterprise" | "Advanced" | "Architecture";
  experience: string;
  highlight: string;
  logoKey: string;
}

export default function SkillsSection() {
  const [filter, setFilter] = useState<string>("all");

  const skills: SkillItem[] = [
    // Languages
    {
      name: "Go (Golang)",
      category: "languages",
      level: "Production Core",
      experience: "Primary at CRED",
      highlight: "High-throughput microservices, concurrency with goroutines/channels, Uber Fx dependency injection",
      logoKey: "Go",
    },
    {
      name: "Java",
      category: "languages",
      level: "Enterprise",
      experience: "Core Enterprise",
      highlight: "Spring Boot, enterprise concurrency, OOP design patterns, multithreaded systems",
      logoKey: "Java",
    },
    {
      name: "C++",
      category: "languages",
      level: "Advanced",
      experience: "Competitive Programming",
      highlight: "LeetCode Knight 2103, cache-friendly memory layouts, algorithms & data structures",
      logoKey: "C++",
    },
    {
      name: "Python",
      category: "languages",
      level: "Production Core",
      experience: "AI & Scripting",
      highlight: "AI/ML agentic pipelines, n8n automation nodes, Django microservices for SIH Winner",
      logoKey: "Python",
    },
    {
      name: "TypeScript",
      category: "languages",
      level: "Production Core",
      experience: "Full Stack & Web",
      highlight: "22+ freelance client architectures (Mesa School, itel, Cautio), strict typing, Next.js",
      logoKey: "TypeScript",
    },

    // Backend & Distributed
    {
      name: "Uber Fx",
      category: "backend",
      level: "Production Core",
      experience: "CRED & RideFlow",
      highlight: "Application lifecycle management, clean dependency injection in distributed Go systems",
      logoKey: "Go",
    },
    {
      name: "gRPC & Protobuf",
      category: "backend",
      level: "Production Core",
      experience: "Microservice IPC",
      highlight: "Low-latency binary serialization, HTTP/2 streaming, strictly-typed service contracts",
      logoKey: "Go",
    },
    {
      name: "Apache Kafka",
      category: "backend",
      level: "Enterprise",
      experience: "Event-Driven",
      highlight: "Pub/Sub streams, consumer group rebalancing, event sourcing for ride state transitions",
      logoKey: "Kafka",
    },
    {
      name: "Spring Boot",
      category: "backend",
      level: "Enterprise",
      experience: "Enterprise Backends",
      highlight: "REST APIs, JPA/Hibernate, Spring Security, microservice gateway integration",
      logoKey: "Spring Boot",
    },
    {
      name: "REST APIs & Webhooks",
      category: "backend",
      level: "Production Core",
      experience: "Omnichannel Integrations",
      highlight: "Idempotent payment callbacks, rate limiting, token buckets, RFC compliance",
      logoKey: "Go",
    },

    // Databases & Caching
    {
      name: "PostgreSQL",
      category: "databases",
      level: "Production Core",
      experience: "Primary Relational DB",
      highlight: "ACID transactions, indexed geospatial queries, connection pooling (PgBouncer), schema migrations",
      logoKey: "PostgreSQL",
    },
    {
      name: "Redis",
      category: "databases",
      level: "Production Core",
      experience: "In-Memory Store",
      highlight: "Distributed locks (Redlock), geo-radius driver matching, sub-millisecond session caching",
      logoKey: "Redis",
    },
    {
      name: "MongoDB",
      category: "databases",
      level: "Enterprise",
      experience: "Document Store",
      highlight: "Aggregation pipelines, flexible document schemas for Waqt Pe Post parcel manifests",
      logoKey: "MongoDB",
    },

    // Cloud & DevOps
    {
      name: "Kubernetes",
      category: "devops",
      level: "Production Core",
      experience: "CRED & RideFlow",
      highlight: "EKS deployment manifests, Horizontal Pod Autoscaling (HPA), Ingress controllers, zero-downtime rollouts",
      logoKey: "Kubernetes",
    },
    {
      name: "Docker",
      category: "devops",
      level: "Production Core",
      experience: "Containerization",
      highlight: "Multi-stage minimal distroless builds, Alpine scratch images, container security scanning",
      logoKey: "Docker",
    },
    {
      name: "AWS",
      category: "devops",
      level: "Production Core",
      experience: "Cloud Infrastructure",
      highlight: "EC2, EKS, S3, RDS, IAM RBAC, CloudWatch, VPC subnetting and security groups",
      logoKey: "AWS",
    },
    {
      name: "Jenkins & CI/CD",
      category: "devops",
      level: "Production Core",
      experience: "CRED Intelligent Test",
      highlight: "Automated regression mapping, PR inspection pipelines, automated deployment triggers",
      logoKey: "Jenkins",
    },
    {
      name: "Linux & Git",
      category: "devops",
      level: "Production Core",
      experience: "Core Workflow",
      highlight: "System debugging, strace, perf, bash scripting, trunk-based git development",
      logoKey: "Linux",
    },

    // AI & System Architecture
    {
      name: "Agentic AI & LLMs",
      category: "ai-architecture",
      level: "Architecture",
      experience: "CRED Autonomous RCA",
      highlight: "Multi-agent orchestration, prompt chaining, automated log investigation and anomaly synthesis",
      logoKey: "LLMs",
    },
    {
      name: "Model Context Protocol (MCP)",
      category: "ai-architecture",
      level: "Architecture",
      experience: "CRED Slack Assistant",
      highlight: "Anthropic MCP servers connecting Slack LLM agents to GitHub, live microservices, and databases",
      logoKey: "LLMs",
    },
    {
      name: "n8n Automation",
      category: "ai-architecture",
      level: "Production Core",
      experience: "Workflow Engine",
      highlight: "Self-hosted webhook triggers, automated dev debugging flows, multi-service payload sync",
      logoKey: "n8n",
    },
    {
      name: "System Design & Distributed Tracing",
      category: "ai-architecture",
      level: "Architecture",
      experience: "High Availability",
      highlight: "CAP theorem, fault tolerance, circuit breakers, Jaeger/OpenTelemetry, Prometheus & Grafana",
      logoKey: "Go",
    },
  ];

  const filterCategories = [
    { key: "all", label: "All Technologies (22)" },
    { key: "languages", label: "Languages" },
    { key: "backend", label: "Distributed Backend" },
    { key: "databases", label: "Databases & Cache" },
    { key: "devops", label: "DevOps & Cloud" },
    { key: "ai-architecture", label: "AI & System Design" },
  ];

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>TECHNOLOGY ARSENAL // PRODUCTION TESTED</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              SKILLS &amp; PROTOCOLS
            </h2>
          </div>

          <p className="text-sm text-zinc-400 font-mono max-w-md">
            Architectural expertise in high-concurrency distributed Go microservices, event streaming, cloud infrastructure, and autonomous agentic workflows.
          </p>
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                filter === cat.key
                  ? "bg-[#00E599] text-[#050505] font-bold shadow-[0_0_15px_rgba(0,229,153,0.3)]"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const LogoComponent = TechLogos[skill.logoKey] || TechLogos.Go;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-[#0A0A0D] border border-white/10 hover:border-[#00E599]/40 p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,153,0.08)] flex flex-col justify-between"
                >
                  <div>
                    {/* Top row with Logo and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#f2f2ee] group-hover:text-[#00E599] group-hover:border-[#00E599]/30 transition-all">
                        <LogoComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 uppercase tracking-wider group-hover:border-[#00E599]/20 group-hover:text-[#00E599]">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title & Experience */}
                    <h3 className="font-display font-bold text-2xl text-[#f2f2ee] tracking-wide mb-1 group-hover:text-[#00E599] transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
                      {skill.experience}
                    </div>

                    {/* Architectural Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {skill.highlight}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>STATUS: VALIDATED</span>
                    <span className="text-[#00E599] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> PROD READY
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
