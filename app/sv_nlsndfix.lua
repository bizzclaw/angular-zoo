if string.find(string.lower(game.GetMap()), "neverlosehopehospital") then
	hook.Add("InitPostEntity", "PurgeAnnoyingHospitalSounds", function()
		ents.FindByClass('env_splash')[1]:Remove()
	end)
end
