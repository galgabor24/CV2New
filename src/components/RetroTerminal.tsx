import React from 'react';

export default function RetroTerminal() {
  return (
    <div className="font-mono bg-black border-2 border-gray-600 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 max-w-5xl mx-auto">
      {/* Terminal Title Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-1 flex items-center justify-between border-b-2 border-gray-600">
        <div className="flex items-center gap-2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVR4nGNgoBAwqjml/icGg/QyEauZkDNIMhzZAGLxwDUAF8YwQM0p9b+aU+p/QpiceKDMAFITEtEGkBp4RBtAauARbQAxCYk+BhAqSOhmANGFiH4GEGMAeQaQUJ3S1wBiLCXfAFIrUwBz2gp7M5VdmQAAAABJRU5ErkJggg=="
            alt="CMD icon"
            className="w-4 h-4"
          />
          <span className="text-white text-sm">Command Prompt</span>
        </div>
        <div className="flex gap-1">
          <button className="w-3 h-3 bg-gray-400 rounded-sm hover:bg-gray-300" />
          <button className="w-3 h-3 bg-gray-400 rounded-sm hover:bg-gray-300" />
          <button className="w-3 h-3 bg-red-600 rounded-sm hover:bg-red-500" />
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 bg-black text-green-500 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">C:\&gt;</span>
          <span className="typing-animation">type about_me.txt</span>
        </div>

        <div className="pl-4 space-y-4 text-cyan-400">
          <div className="space-y-1">
            <p><span className="text-green-400">Username:</span> Gabor Gal</p>
            <p>
              <span className="text-green-400">Email:</span>{' '}
              <a 
                href="mailto:gabor.gal@galgabor.eu"
                className="text-white underline hover:text-cyan-300 transition-colors"
              >
                gabor.gal@galgabor.eu
              </a>
            </p>
          </div>

          <p>
            Graduated IT Engineer Assistant with proven expertise in IT infrastructure. Currently serving as a SysAdmin at{' '}
            <a 
              href="https://genesis.global"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-cyan-300 transition-colors"
            >
              Genesis
            </a>
            , leveraging 5.5 years of hands-on experience in managing complex systems.
          </p>

          <div>
            <p className="text-green-400 mb-2">Specializing in:</p>
            <ul className="list-none space-y-1 pl-4">
              <li className="flex items-center gap-2">
                <span className="text-green-400">-</span>
                <span>Infrastructure management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">-</span>
                <span>System security</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">-</span>
                <span>Technical problem-solving</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">-</span>
                <span>Team collaboration</span>
              </li>
            </ul>
          </div>

          <p className="pt-2">
            <span className="text-green-400">Mission:</span> Delivering reliable and secure technology solutions while maintaining operational excellence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-400">C:\&gt;</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}